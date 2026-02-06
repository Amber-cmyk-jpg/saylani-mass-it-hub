import { supabase } from "./config.js";

document.getElementById("saveBtn").addEventListener("click", async () => {
  const title = document.getElementById("title").value;
  const category = document.getElementById("category").value;
  const content = document.getElementById("content").value;
  const file = document.getElementById("image").files[0];

  const user = supabase.auth.user();
  if (!user) return alert("Please login first");

  let image_url = "";

  if (file) {
    const { data, error } = await supabase.storage
      .from("post-images")
      .upload(`${user.id}/${file.name}`, file);

    if (error) return alert(error.message);

    image_url = `https://YOUR_SUPABASE_URL/storage/v1/object/public/post-images/${user.id}/${file.name}`;
  }

  const { error } = await supabase.from("posts").insert({
    user_id: user.id,
    title,
    category,
    content,
    image_url
  });

  if (error) return alert(error.message);

  alert("Post created!");
  window.location.href = "feed.html";
});
