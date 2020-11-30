import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const urlResults = 'https://roulette-service-dev.nsoft.com/config/b6410774-a252-4bbe-a781-43c2b54f31af?locale=en&app=RouletteWeb'
const urlStats = 'https://roulette-service-dev.nsoft.com/stats/b6410774-a252-4bbe-a781-43c2b54f31af/daily/'

const headers = {
  method: 'GET',
  redirect: 'follow'
}

export default new Vuex.Store({
  state: {
    played: false,
    resultsHeaders: [
      {
        text: 'Display ID',
        align: 'start',
        value: 'displayId'
      },
      { text: 'Result', value: 'result' },
      { text: 'Status', value: 'status.name' }
    ],
    rounds: [],
    statsHeaders: [
      {
        text: 'Bet',
        align: 'start',
        value: 'bet'
      },
      { text: 'Count', value: 'count' }
    ],
    bets: []
  },
  mutations: {
    setRounds (state, payload) {
      if (!state.rounds.some((r) => r.displayId === payload.displayId)) {
        state.rounds = [...state.rounds, payload]
      } else {
        state.rounds = [
          ...state.rounds.map(item =>
            item.displayId !== payload.displayId ? item : { ...item, ...payload }
          )
        ]
      }
    },
    setBets (state, payload) {
      state.bets = Object.entries(payload).map((i) => { return { bet: i[0], ...i[1] } })
    },
    setPlayed (state, payload) {
      state.played = payload
    }
  },
  actions: {
    async setRounds (state) {
      const rounds = await fetch(urlResults, headers)
      state.commit('setRounds', (await rounds.json()).round)
    },
    async setBets (state) {
      const bets = await fetch(`${urlStats}${new Date().toISOString().substring(0, 10)}`, headers)
      state.commit('setBets', (await bets.json()).bets)
    },
    SOCKET_message (state, message) {
      if (state.getters.getPlayed) {
        const messageParsed = JSON.parse(message)
        state.commit('setRounds', { ...messageParsed.round, ...{ result: messageParsed.result } })
      }
    }
  },
  modules: {
  },
  getters: {
    getRounds: state => state.rounds,
    getResultsHeaders: state => state.resultsHeaders,
    getBets: state => state.bets,
    getStatsHeaders: state => state.statsHeaders,
    getPlayed: state => state.played
  }
})
