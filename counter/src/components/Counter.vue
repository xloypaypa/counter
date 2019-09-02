<template>
  <div>
    <span>{{index}}</span>
    <button v-on:click="plus">+</button>
    <span>{{value}}</span>
    <button v-on:click="reverse">-</button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: {
    index: Number,
    value: Number
  },
  methods: {
    plus: function() {
      this.$emit("updateCounter", { index: this.index - 1, value: this.value + 1 });
    },
    reverse: function() {
      this.$emit("updateCounter", { index: this.index - 1, value: this.value - 1 });
    }
  }
};
</script>