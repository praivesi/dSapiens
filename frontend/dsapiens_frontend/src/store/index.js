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
    LOAD_ARTICLES(state, data) {
      state.articles = data;
    },
  },
  actions: {
    LOAD_ARTICLES() {
      articleApi.get().then((response) => {
        this.commit("LOAD_ARTICLES", response.data);
      });
    },
  },
});
