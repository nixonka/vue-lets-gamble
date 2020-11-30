<template>
  <div class="home">
    <v-btn v-if="!played" @click="play" elevation="2">Play</v-btn>
    <h1 v-else>You already played!</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  methods: {
    play () {
      this.$store.commit('setPlayed', true)
      this.$store.dispatch('setRounds')
      this.$store.dispatch('setBets')

      this.$router.push('/results')
    }
  },
  computed: {
    ...mapGetters({
      played: 'getPlayed'
    })
  }
}
</script>
