<template>
  <div v-if="played" class="results">
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
  <h1 v-else>You have to put some money in the game!</h1>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      played: 'getPlayed',
      rounds: 'getRounds',
      headers: 'getResultsHeaders',
      bets: 'getBets',
      headersBets: 'getStatsHeaders'
    })
  }
}
</script>

<style>
</style>
