<template>
  <div class="results">
    <h1>Results</h1>
    <v-data-table
      :headers="headers"
      :items="rounds"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
    <h1>Statistics</h1>
    <v-data-table
      :headers="headersBets"
      :items="bets"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>
<script>
export default {
  computed: {
    rounds () {
      return this.$store.getters.getRounds
    },
    headers () {
      return this.$store.getters.getResultsHeaders
    },
    bets () {
      return this.$store.getters.getBets
    },
    headersBets () {
      return this.$store.getters.getStatsHeaders
    }
  }
}
</script>

<style>
</style>
