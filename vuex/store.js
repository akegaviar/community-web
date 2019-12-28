import Vue from "vue";
import Vuex from "vuex";
import md from "../src/utils/markdownConf.js";
import readme from "./readme.js";
import readmeZh from "./readme_zh.js";

Vue.use(Vuex);

const createID = () => {
  let t = "";
  for (let i = 0; i < 15; i++) {
    t += Math.floor(Math.random() * 10);
  }
  return t;
};

const saveID = state => {
  let idArr = [];
  for (let i = 0, len = state.articleList.length; i < len; i++) {
    idArr.push(state.articleList[i].id);
    localStorage.setItem("idArr", idArr.join(","));
  }
};

const state = {
  isShowEditor: false,
  loginStatus: window.sessionStorage.getItem("loginStatus") * 1,
  userName: window.sessionStorage.getItem("userName"),
  headPortrait: window.sessionStorage.getItem("headPortrait"),
  showMenu: true,
  fullscreen: false,
  preview: false,
  articleList: [
    {
      id: createID(),
      content: "",
      current: true
    }
  ],
  theme: null,
  firstView: localStorage.getItem("first") !== null ? false : true
};

const mutations = {
  CHANGE_THEME(state) {
    if (state.theme === "theme-day") {
      state.theme = "theme-night";
    } else {
      state.theme = "theme-day";
    }
    localStorage.setItem("theme", state.theme);
  },
  INITILIZE(state) {
    state.theme = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "theme-day";
    localStorage.setItem("theme", state.theme);
    if (state.firstView && state.articleList.length === 1) {
      let language = window.navigator.browserLanguage
        ? window.navigator.browserLanguage
        : window.navigator.language;
      let text = "";
      if (~language.indexOf("zh")) {
        text = readmeZh;
      } else {
        text = readme;
      }
      for (let i = 0, len = state.articleList.length; i < len; i++) {
        if (state.articleList[i].current) {
          state.articleList[i].content = text;
        }
      }

      localStorage.setItem("first", false);
      state.firstView = false;
    }
  },
  SHOW_MENU(state) {
    state.showMenu = !state.showMenu;
  },
  TEXT_INPUT(state, txt) {
    for (let i = 0, len = state.articleList.length; i < len; i++) {
      if (state.articleList[i].current) {
        state.articleList[i].content = txt;
      }
    }
  },
  SAVE_TO_CACHE(state) {
    localStorage.setItem("articleList", JSON.stringify(state.articleList));
    // for (let i = 0, len = state.articleList.length; i < len; i++) {
    // 	if (state.articleList[i].current) {
    // 		localStorage.setItem(state.articleList[i].id, state.articleList[i].content)
    // 		saveID(state)
    // 	}
    // }
  },
  READ_FROM_CACHE(state) {
    for (let i = 0, len = state.articleList.length; i < len; i++) {
      if (state.articleList[i].current) {
        state.articleList[i].content = localStorage.getItem(
          state.articleList[i].id
        );
      }
    }
  },
  SELECT_THIS(state, index) {
    for (let i = 0, len = state.articleList.length; i < len; i++) {
      state.articleList[i].current = false;
    }
    state.articleList[index].current = true;
  },
  NEW_ARTICLE(state) {
    for (let i = 0, len = state.articleList.length; i < len; i++) {
      state.articleList[i].current = false;
    }

    let newOne = {
      id: createID(),
      content: "Untitled\n---",
      current: true
    };

    state.articleList.push(newOne);
  },
  DELETE_THIS(state, index) {
    if (state.articleList.length > 1) {
      state.articleList.splice(index, 1);

      localStorage.setItem("articleList", JSON.stringify(state.articleList));

      if (!state.articleList.some(e => e.current)) {
        state.articleList[0].current = true;
      }
    }
  },
  READ_LIST_FROM_LOCAL(state) {
    if (localStorage.getItem("articleList")) {
      state.articleList = null;
      let articles = [];
      articles = articles.concat(
        JSON.parse(localStorage.getItem("articleList"))
      );
      state.articleList = articles;
    }
  },
  FULLSCREEN(state) {
    state.fullscreen = !state.fullscreen;
    if (state.fullscreen && state.preview) {
      state.preview = !state.preview;
    }
  },
  PREVIEW(state) {
    state.preview = !state.preview;
    // state.preview = !state.preview;
    // if (state.fullscreen && state.preview) {
    //   state.fullscreen = !state.fullscreen;
    // }
  }
};

const actions = {
  showMenu({ commit }) {
    commit("SHOW_MENU");
  },
  textInput({ commit }, txt) {
    commit("TEXT_INPUT", txt);
  },
  selectThis({ commit }, index) {
    commit("SELECT_THIS", index);
  },
  newArticle({ commit }) {
    commit("NEW_ARTICLE");
    commit("SAVE_TO_CACHE");
  },
  deleteThis({ commit }, index) {
    commit("DELETE_THIS", index);
  },
  saveToCache({ commit }) {
    commit("SAVE_TO_CACHE");
  },
  readFromCache({ commit }) {
    commit("READ_FROM_CACHE");
  },
  loadCache({ commit }) {
    commit("READ_LIST_FROM_LOCAL");
  }
};

const getters = {
  articleRaw: state => {
    let content = "";
    for (let i = 0, len = state.articleList.length; i < len; i++) {
      if (state.articleList[i].current) {
        content = state.articleList[i].content;
      }
    }
    return content;
  },
  articleMd: (state, getters) => {
    return md.render(getters.articleRaw);
  },
  articleList: state => {
    return state.articleList;
  },
  articleLineRaw: (state, getters) => {
    return getters.articleRaw.split("\n");
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
