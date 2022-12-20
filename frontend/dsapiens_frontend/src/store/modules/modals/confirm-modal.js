export default {
  namespaced: true,
  state: {
    title: "CARPE DIEM",
    message: "ABRACADABRA",
    isOpen: false,
    isConfirm: false,
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
    IS_CONFIRM(state) {
      return state.isConfirm;
    },
  },
  mutations: {
    OPEN(state, payload) {
      state.title = payload.title;
      state.message = payload.message;
      state.isOpen = true;
    },
    CLOSE(state, confirmFlag) {
      state.isOpen = false;
      state.title = "";
      state.message = "";
      state.isConfirm = confirmFlag;
    },
  },
};
