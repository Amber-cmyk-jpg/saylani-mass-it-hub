import { supabase } from "./config.js";

const { data } = await supabase.auth.getUser();

if (!data.user) {
  window.location.href = "index.html";
}
