<template>
  <ul class="nav">
    <li class="divider" data-content="KEYS"></li>
    <li v-for="key in keys" class="nav-item" v-bind:class="{'active': key == currentKey}">
      <a v-on:click='setCurrentKey(key)' href="#">{{ key }}</a>
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
      keys: [],
      currentKey: null
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
      this.currentKey = currentKey
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
