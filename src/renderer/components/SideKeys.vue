<template>
<v-navigation-drawer clipped fixed app permanent>
  <v-list dense>
    <v-list-tile @click="setCurrentKey(key)" v-for="key in keys">
      <v-list-tile-content>
        <v-list-tile-title>{{ key }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</v-navigation-drawer>
</template>

<script>
import redis from 'redis'
import rejson from 'redis-rejson'

export default {
  name: 'SideKeys',
  components: {
  },
  data: function() {
    return {
      keys: [],
      currentKey: null,
      drawer: true
    }
  },

  props: ['redisServerUrl'],

  mounted: function() {
    console.log('Loading Side Keys!')
    this.initClientAndUpdateKeys()
  },

  watch: {
    redisServerUrl: function() {
      console.log(`Redis server url in SideKeys is ${this.redisServerUrl}`)
      this.initClientAndUpdateKeys()
    }
  },

  methods: {
    setCurrentKey: function(currentKey) {
      console.log(`Sending event to set current key as ${currentKey}`)
      this.$emit('setCurrentKeyEvent', currentKey)
      this.currentKey = currentKey
    },

    initClientAndUpdateKeys: function() {
      this.keys = []
      this.client = redis.createClient(this.redisServerUrl)
      this.client.keys('*', (err, replies) => {
        this.keys = replies
      })
    }
  }
}
</script>

<style>
/* .menu-list {
  min-height: 90vh;
} */
</style>
