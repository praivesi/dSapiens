import { createStore } from "vuex";
import articleStore from "./modules/article";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    article: articleStore,
  },
  strict: debug,
});
