import http from "./http";

export async function get() {
  return http.get("/articles");
}

export async function add(author, title, content) {
  return http.post("/articles/", {
    author,
    title,
    content,
  });
}

export async function update(id, author, title, content) {
  return http.put("/articles/" + id + "/", {
    author,
    title,
    content,
  });
}

export async function remove(id) {
  return http.delete("/articles/" + id + "/");
}
