import { createStore } from "vuex";
import * as articleApi from "@/api/article";

export default createStore({
  state: {
    articles: [],
  },
  getters: {
    GET_ARTICLES(state) {
      return state.articles;
    },
  },
  mutations: {
    LOAD_ARTICLES(data) {
      state.articles = data;
    },
  },
  actions: {
    LOAD_ARTICLES() {
      articleApi.get().then((response) => {
        console.log("LOAD_ARTICLES response.data => " + response.data);
        this.commit("LOAD_ARTICLES", response.data);
      });
    },
  },
});
