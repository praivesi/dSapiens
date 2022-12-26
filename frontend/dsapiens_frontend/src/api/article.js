import http from "./http";

export async function get() {
  return http.get("/articles");
}

export async function add(title, content) {
  return http.post("/articles/", {
    title,
    content,
  });
}

export async function update(id, title, content) {
  return http.put("/articles/", {
    id,
    title,
    content,
  });
}

export async function remove(id) {
  return http.delete("/articles/" + id + "/");
}
