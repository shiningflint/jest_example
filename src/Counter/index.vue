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
  props: {
    min: Number,
    max: Number
  },
  components: {
    NumberCounter
  },
  data () {
    return {
      title: 'bananas',
      number: this.min || 0
    }
  },
  methods: {
    increaseNumber () {
      this.number += 1
    },
    decreaseNumber () {
      if (this.min === undefined || this.number > this.min) this.number -= 1
    }
  }
}
</script>
