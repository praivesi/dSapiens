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
    ADD_ARTICLE(state, title, content) {},
    UPDATE_ARTICLE(state, id, title, content) {},
    REMOVE_ARTICLE(state, id) {},
  },
  actions: {
    LOAD_ARTICLES({ commit }) {
      articleApi.get().then((response) => {
        console.log("loaded articles => " + JSON.stringify(response.data));
        commit("LOAD_ARTICLES", response.data);
      });
    },
    ADD_ARTICLE({ commit }, title, content) {
      console.log("ADD_ARTICLE title => " + JSON.stringify(title));
      console.log("ADD_ARTICLE content => " + content);

      articleApi
        .add({
          title,
          content,
        })
        .then((response) => {
          console.log("added article => " + JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      commit("ADD_ARTICLE", title, content);
    },

    UPDATE_ARTICLE({ commit }, id, title, content) {
      articleApi
        .update({
          id,
          title,
          content,
        })
        .then((response) => {
          console.log("updated article => " + JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      commit("UPDATE_ARTICLE", id, title, content);
    },

    REMOVE_ARTICLE({ commit }, id) {
      articleApi
        .remove({
          id,
        })
        .then((response) => {
          console.log("deleted article => " + JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      commit("REMOVE_ARTICLE", id);
    },
  },
});
