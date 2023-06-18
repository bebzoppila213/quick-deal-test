import Vue from "vue";
import Vuex from "vuex";
import TasksState from "./TasksState";
Vue.use(Vuex);

export default new Vuex.Store({
    mutations: {
        initialiseStore(state) {
            if (localStorage.getItem("store")) {
                this.replaceState(
                    Object.assign(state, JSON.parse(localStorage.getItem('store')))
                );
            }
        },
    },
    modules: {
        tasks: TasksState,
    },
});