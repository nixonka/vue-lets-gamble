<template>
  <div id="app">
    <v-app>
      <div class="main">
        <div
          class="main__background"
          :class="{ 'main__background--blured': highlight }"
        ></div>
        <div id="nav">
          <router-link to="/">Play</router-link> |
          <router-link to="/results">Results</router-link>
        </div>
        <router-view />
      </div>
    </v-app>
  </div>
</template>
<script>
export default {
  sockets: {
    connect: function () {
      console.log('socket connected')
    }
  },
  computed: {
    highlight () {
      return this.$route.path !== '/'
    }
  },
  data () {
    return {
      home: true
    }
  }
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  background-color: #000000;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #acacac;
  background: none;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.main {
  &__background {
    width: 100vw;
    height: 100vh;
    background-image: url(assets/back.jpg);
    background-size: cover;
    background-position: center center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;

    &--blured {
      background-color: rgba($color: #000000, $alpha: 0.5);
      filter: blur(8px);
      -webkit-filter: blur(8px);
      background-blend-mode: darken;
    }
  }
}
</style>
