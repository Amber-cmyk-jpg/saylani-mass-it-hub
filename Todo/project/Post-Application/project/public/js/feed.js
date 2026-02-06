import { supabase } from "./config.js";

async function loadPosts() {
  const filter = document.getElementById("categoryFilter").value;

  let query = supabase.from("posts").select("*").order("created_at", { ascending: false });

  if (filter) {
    query = query.eq("category", filter);
  }

  const { data, error } = await query;
  if (error) return alert(error.message);

  const feed = document.getElementById("feed");
  feed.innerHTML = "";

  data.forEach((post) => {
    feed.innerHTML += `
      <div class="post-card">
        <h3>${post.title}</h3>
        <p>${post.category}</p>
        <p>${post.content}</p>
        ${post.image_url ? `<img src="${post.image_url}" width="200">` : ""}
      </div>
    `;
  });
}

document.getElementById("categoryFilter").addEventListener("change", loadPosts);
loadPosts();
