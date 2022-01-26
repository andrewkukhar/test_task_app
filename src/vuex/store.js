import axios from 'axios';
import { createStore } from 'vuex'

const store = createStore({
    state: {
        users: [],
        seluser: [],
    },
    mutations: {
        SET_USERS_TO_STATE: (state, users) => {
            state.users = users;
        },
        SET_SELUSER: (state, user) => {
            if (state.seluser.length) {
                let isUserExist = false;
                state.seluser.map(function (item) {
                    if (item.name === user.name) {
                        isUserExist = true;
                        state.seluser.slice(user)
                    }
                })
                if (!isUserExist) {
                    state.seluser.push(user)
                }
            } else {
                state.seluser.push(user)
            }
        },
        REMOVE_USER: (state, index) => {
            state.seluser.splice(index, 1)
        },
    },
    actions: {
        GET_USERS_FROM_API({ commit }) {
            return axios('http://localhost:3000/users', {
                method: "GET"
            })
                .then((users) => {
                    commit('SET_USERS_TO_STATE', users.data)
                    return users;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        },
        SELECTED_USER({ commit }, user) {
            commit('SET_SELUSER', user);
            console.log('SET_SELUSER', user)
        },
        DELETE_USER({ commit }, index) {
            commit('REMOVE_USER', index)
        },
    },
    getters: {
        USERS(state) {
            return state.users;
        },
        SELUSER(state) {
            return state.seluser;
        },
    },
});

export default store;