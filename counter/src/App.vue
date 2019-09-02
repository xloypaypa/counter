<template>
  <div id="app">
    <input v-model="numInput" v-on:keyup="updateNum" />
    <Counter
      v-for="index in getNum()"
      v-bind:key="index"
      v-bind:index="index"
    />
    <div>
      sum: 
      {{getSum()}}
    </div>
  </div>
</template>

<script>
import Counter from "./components/Counter";

export default {
  name: "app",
  components: {
    Counter
  },
  data: function() {
    return {
      numInput: "0"
    }
  },
  methods: {
    getSum: function() {
      return this.$store.getters.getSum();
    },
    getCountByIndex: function(index) {
      return this.$store.getters.getSum();
    },
    updateNum: function() {
      this.$store.commit('updateNum', this.getNum());
    },
    getNum: function() {
      let isNum = function(numString) {
        return !isNaN(parseFloat(numString)) && isFinite(numString);
      };

      let num = parseInt(this.numInput);
      if (isNum(this.numInput) && num >= 0) {
        return num;
      } else {
        return 0;
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
