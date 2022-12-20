import { createStore } from "vuex";
import articleStore from "./modules/article";
import confirmModalStore from "./modules/modals/confirm-modal";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    article: articleStore,
    confirmModal: confirmModalStore,
  },
  strict: debug,
});
