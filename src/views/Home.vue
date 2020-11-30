<template>
  <div class="home">
    <button @click="play">Play</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods: {
    play () {
      this.$store.dispatch('setRounds')
      this.$store.dispatch('setBets')
    }
  },
  components: {}
}
</script>
