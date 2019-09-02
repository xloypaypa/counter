import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const initState = {
    num: 0,
    counts: [],
}

const store = new Vuex.Store({
    state: initState,
    getters: {
        getSum: function (state) {
            return function() {
                let result = 0;
                for (let i = 0; i < state.num; i++) {
                    result += state.counts[i];
                }
                return result;
            }
        },
        getCountByIndex: function (state) {
            return function(index) {
                return state.counts[index - 1];
            }
        },
        getNum: function () {
            return function() {
                return state.num;
            }
        }
    },
    mutations: {
        updateCounter: function (state, payload) {
            let oldCounts = state.counts;
            oldCounts[payload.index - 1] = payload.value;
            state.counts = [];
            for (let i = 0; i < oldCounts.length; i++) {
                state.counts.push(oldCounts[i]);
            }
            console.log(state.counts);
        },
        updateNum: function (state, newNum) {
            state.num = newNum;
            while (state.counts.length < state.num) {
                state.counts.push(state.counts.length + 1);
            }
            while (state.counts.length > state.num) {
                state.counts.pop();
            }
        },
    }
});

export default store;