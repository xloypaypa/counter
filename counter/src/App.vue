<template>
  <div id="app">
    <input v-model="numInput" v-on:keyup="updateNum" />
    <Counter
      v-for="index in getNum()"
      v-bind:key="index"
      v-bind:index="index"
      v-bind:value="getCountByIndex(index - 1)"
      v-on:updateCounter="updateCounter"
    />
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
      numInput: "0",
      counts: []
    };
  },
  methods: {
    updateCounter: function(value) {
      let oldCounts = this.counts;
      oldCounts[value.index] = value.value;
      this.counts = [];
      for (let i = 0; i < oldCounts.length; i++) {
        this.counts.push(oldCounts[i]);
      }
      console.log(this.counts);
    },
    getCountByIndex: function(index) {
      return this.counts[index];
    },
    updateNum: function() {
      let num = this.getNum();
      while (this.counts.length < num) {
        this.counts.push(this.counts.length + 1);
      }
      while (this.counts.length > num) {
        this.counts.pop();
      }
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
