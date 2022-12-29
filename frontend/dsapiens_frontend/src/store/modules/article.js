import * as articleApi from "@/api/article";

export default {
  namespaced: true,
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
    ADD_ARTICLE(state, data) {
      state.articles.push(data);
    },
    UPDATE_ARTICLE(state, data) {
      let idx = state.articles.findIndex((e) => e.id == data.id);

      if (idx > -1) {
        state.articles[idx] = data;
      } else {
        console.log("UPDATE_ARTICLE mutation error.");
      }
    },
    REMOVE_ARTICLE(state, id) {
      let idx = state.articles.findIndex((e) => e.id == id);

      if (idx > -1) {
        state.articles.splice(idx, 1);
      } else {
        console.log("REMOVE_ARTICLE mutation error.");
      }
    },
  },
  actions: {
    LOAD_ARTICLES({ commit }) {
      articleApi.get().then((response) => {
        console.log("loaded articles => " + JSON.stringify(response.data));

        commit("LOAD_ARTICLES", response.data);
      });
    },
    ADD_ARTICLE({ commit }, params) {
      articleApi
        .add(params.author, params.title, params.content)
        .then((response) => {
          console.log("added article => " + JSON.stringify(response.data));

          commit("ADD_ARTICLE", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    UPDATE_ARTICLE({ commit }, params) {
      console.log("UPDATE_ARTICLE params => " + JSON.stringify(params));

      articleApi
        .update(params.id, params.author, params.title, params.content)
        .then((response) => {
          console.log("updated article => " + JSON.stringify(response.data));

          commit("UPDATE_ARTICLE", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    REMOVE_ARTICLE({ commit }, id) {
      console.log("id => " + id);

      articleApi
        .remove(id)
        .then((response) => {
          console.log("deleted article => " + JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

      commit("REMOVE_ARTICLE", id);
    },
  },
};
