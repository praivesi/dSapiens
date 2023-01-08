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
  console.log(
    "update article => id: " +
      id +
      ", author: " +
      author +
      ", title: " +
      title +
      ", content: " +
      content
  );

  return http.put("/articles/" + id + "/", {
    author,
    title,
    content,
  });
}

export async function remove(id) {
  return http.delete("/articles/" + id + "/");
}
