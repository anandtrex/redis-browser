<template>
  <ul class="menu menu-list">
    <li class="divider" data-content="KEYS">
      <li v-for="key in keys" class="menu-item">
        <a v-on:click='setCurrentKey(key)'>{{ key }}</a>
      </li>
  </ul>
</template>

<script>
import redis from 'redis'
import rejson from 'redis-rejson'

export default {
  name: 'SideKeys',
  data: function () {
    return {
      keys: []
    }
  },

  props: ['redisServerUrl'],

  mounted: function () {
    console.log('Loading Side Keys!')
    this.initClientAndUpdateKeys()
  },

  watch: {
    redisServerUrl: function () {
      console.log(`Redis server url in SideKeys is ${this.redisServerUrl}`)
      this.initClientAndUpdateKeys()
    }
  },

  methods: {
    setCurrentKey: function (currentKey) {
      console.log(`Sending event to set current key as ${currentKey}`)
      this.$emit('setCurrentKeyEvent', currentKey)
    },

    initClientAndUpdateKeys: function () {
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
.menu-list {
  min-height: 90vh;
}
</style>
