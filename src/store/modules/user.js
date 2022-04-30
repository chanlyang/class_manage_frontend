import { getUserInfo, login, logout } from "@/api/auth/auth";
import { getToken, setToken, removeToken, setRoleId, removeRoleId, setUser, getUser, removeUser, setUserImg, getUserImg } from "@/utils/auth";

const state = {
  token: getToken(), // token
  user: getUser(), // 用户名，
  imageUrl: getUserImg(),
};

const mutations = {
  SET_TOKEN_STATE: (state, token) => {
    state.token = token;
  },
  SET_USER_STATE: (state, user) => {
    state.user = user;
  },
};

const actions = {
  // 用户登录
  login({ commit }, userInfo) {
    console.log(userInfo);
    const { userId, password, rememberMe } = userInfo;
    return new Promise((resolve, reject) => {
      login({ userId: userId.trim(), password: password, rememberMe: rememberMe })
        .then((response) => {
          const { data } = response;
          commit("SET_TOKEN_STATE", data.token);
          setToken(data.token);
          setRoleId(data.roleId);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  // 获取用户信息
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserInfo()
        .then((response) => {
          const { data } = response;
          if (!data) {
            commit("SET_TOKEN_STATE", "");
            commit("SET_USER_STATE", "");
            removeToken();
            resolve();
            reject("Verification failed, please Login again.");
          }
          console.log(data)
          setUser(data.userName)
          setUserImg(data.imageUrl)
          commit("SET_USER_STATE", data);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  // 注销
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then((response) => {
          console.log(response);
          commit("SET_TOKEN_STATE", "");
          commit("SET_USER_STATE", "");
          removeAll();
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
