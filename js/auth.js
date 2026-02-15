import { supabase } from "./supabase.js";

window.signup = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    document.getElementById("error").innerText = error.message;
  } else {
    alert("Signup successful! Now login.");
  }
};

window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    document.getElementById("error").innerText = error.message;
  } else {
    window.location.href = "dashboard.html";
  }
};
