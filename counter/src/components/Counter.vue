<template>
  <div>
    <span>{{index}}</span>
    <button v-on:click="plus">+</button>
    <span>{{getValue()}}</span>
    <button v-on:click="reverse">-</button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: {
    index: Number
  },
  computed: {},
  methods: {
    getValue: function() {
      return this.$store.getters.getCountByIndex(this.index);
    },
    plus: function() {
      this.$store.commit("updateCounter", {
        index: this.index,
        value: this.getValue() + 1
      });
    },
    reverse: function() {
      this.$store.commit("updateCounter", {
        index: this.index,
        value: this.getValue() - 1
      });
    }
  }
};
</script>