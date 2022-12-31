export default {
  namespaced: true,
  state: {
    title: "",
    message: "",
    isOpen: false,
    confirmedJob: null,
  },
  getters: {
    TITLE(state) {
      return state.title;
    },
    MESSAGE(state) {
      return state.message;
    },
    IS_OPEN(state) {
      return state.isOpen;
    },
  },
  mutations: {
    OPEN(state, payload) {
      state.title = payload.title;
      state.message = payload.message;
      state.confirmedJob = payload.confirmedJob;
      state.isOpen = true;
    },
    CLOSE(state, confirmFlag) {
      if (confirmFlag & (state.confirmedJob != null)) {
        state.confirmedJob();
      }

      state.isOpen = false;
      state.title = "";
      state.message = "";
      state.confirmedJob = null;
    },
  },
};
