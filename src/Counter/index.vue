<template>
  <p>{{ title }}</p>
</template>

<script>
export default {
  data () {
    return {
      title: 'bananas'
    }
  },
  created () {
    console.log('haha bananas')
  }
}
</script>
