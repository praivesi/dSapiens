class ArticleModel {
  constructor(id = -1, author = "Default Author", title = "", content = "") {
    this.id = id;
    this.author = author;
    this.title = title;
    this.content = content;
  }

  copy(other) {
    if (
      other.id == undefined ||
      other.author == undefined ||
      other.title == undefined ||
      other.content == undefined
    ) {
      console.log("ArticleModel copy() failed.");
      return undefined;
    }

    this.id = other.id;
    this.author = other.author;
    this.title = other.title;
    this.content = other.content;
  }
}

export { ArticleModel };
