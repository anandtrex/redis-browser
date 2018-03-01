<template>
<v-content>
  <v-container fluid fill-height>
    <v-layout justify-start align-start>
      <v-flex shrink>
        <json-tree :raw='currentKeyValue'></json-tree>
      </v-flex>
    </v-layout>
  </v-container>
</v-content>
</template>

<script>
import redis from 'redis'
import rejson from 'redis-rejson'

import JsonTree from './json-tree'

export default {
  name: 'KeyContents',

  components: {
    JsonTree
  },

  data: function() {
    return {
      currentKeyValue: "\"Select key on left\"",
    }
  },

  props: ['currentKey', 'redisServerUrl'],

  mounted: function() {
    console.log('Loading Key Contents!')
    rejson(redis)
    this.client = redis.createClient()
    this.client.on('error', err => {
      console.log(`Error ${err}`)
    })
  },

  methods: {},

  watch: {
    currentKey: function() {
      console.log('Current key changed')

      const key = this.currentKey
      this.client.type(key, (err, keyType) => {
        if (err) {
          console.log(err)
        }
        if (keyType === 'ReJSON-RL') {
          this.client.json_get(key, (err1, replies) => {
            console.log('Replies (json): ', replies)
            this.currentKeyValue = replies
          })
        } else {
          this.client.get(key, (err1, replies) => {
            console.log('Replies (normal): ', replies)
            this.currentKeyValue = "\"" + replies + "\""
          })
        }
      })
    },
    redisServerUrl: function() {
      console.log(`Redis server url is ${this.redisServerUrl}`)
      this.client = redis.createClient(this.redisServerUrl)
    }
  }
}
</script>

<style>
/* .value-card {
  min-height: 90vh;
} */
</style>
