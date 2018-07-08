<template>
  <div>
    <button type="button" @click="decreaseNumber()">-</button>
    <span>{{ number }}</span>
    <button type="button" @click="increaseNumber()">+</button>
  </div>
</template>

<script>
export default {
  props: {
    number: Number
  },
  methods: {
    increaseNumber () {
      this.$emit('increaseNumber')
    },
    decreaseNumber () {
      this.$emit('decreaseNumber')
    }
  }
}
</script>
