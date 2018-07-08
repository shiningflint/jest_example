<template>
  <div>
    <p>{{ title }}</p>
    <number-counter
      :number="number"
      @increaseNumber="increaseNumber"
      @decreaseNumber="decreaseNumber"
    />
    <p>Your number is: {{ number }}</p>
  </div>
</template>

<script>
import NumberCounter from './NumberCounter.vue'
export default {
  components: {
    NumberCounter
  },
  data () {
    return {
      title: 'bananas',
      number: 0
    }
  },
  methods: {
    increaseNumber () {
      this.number += 1
    },
    decreaseNumber () {
      this.number -= 1
    }
  }
}
</script>
