<template>
<div class='card value-card'>
  <div class="card-header">
    <div class="card-title h5">Key Value</div>
  </div>
  <div class="card-body">
    <json-tree :raw="currentKeyValue" v-if='isJsonValue'></json-tree>
    <div v-else>{{ currentKeyValue }}</div>
  </div>
</div>
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

  data: function () {
    return {
      currentKeyValue: null,
      isJsonValue: false
    }
  },

  props: ['currentKey'],

  mounted: function () {
    console.log('Loading Key Contents!')
    rejson(redis)
    this.client = redis.createClient()
    this.client.on('error', err => {
      console.log(`Error ${err}`)
    })
  },

  methods: {},

  watch: {
    currentKey: function () {
      console.log('Current key changed')

      const key = this.currentKey
      this.client.type(key, (err, keyType) => {
        if(err){
          console.log(err);
        }
        if (keyType === 'ReJSON-RL') {
          this.client.json_get(key, (err1, replies) => {
            console.log('Replies (json): ', replies)
            this.isJsonValue = true
            this.currentKeyValue = replies
          })
        } else {
          this.client.get(key, (err1, replies) => {
            console.log('Replies (normal): ', replies)
            this.isJsonValue = false
            this.currentKeyValue = replies
          })
        }
      })
    }
  }
}
</script>

<style>
.value-card {
  min-height: 90vh;
}
</style>
