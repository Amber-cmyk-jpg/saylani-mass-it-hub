import { supabase } from "./config.js";

const url = window.location.pathname;

if (url.includes("signup")) {
  document.getElementById("signupBtn").addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) return alert(error.message);
    alert("Signup successful!");
    window.location.href = "login.html";
  });
}

if (url.includes("login")) {
  document.getElementById("loginBtn").addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) return alert(error.message);
    alert("Login successful!");
    window.location.href = "feed.html";
  });
}
