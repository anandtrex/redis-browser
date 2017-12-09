<template>
<form class="form-horizontal">
  <div class="form-group" v-bind:class="{'has-error': hasRedisError}">
    <div class="col-2">
      <label class="form-label" for="input-example-1">Redis Server URL:</label>
    </div>
    <div class="col-4">
      <input class="form-input" type="text" id="input-example-1" placeholder="redis://servername[:port]" v-model='redisServerUrl'>
    </div>
    <div class='col-2'>
      <button class="btn" v-on:click='updateRedisServerUrl'>OK</button>
      <button class="btn" v-on:click='resetRedisServerUrl'>Reset</button>
    </div>
    <div class='col-4' v-if='hasRedisError'>
      <span class="form-input-hint">
        Invalid redis url. Enter url of the form redis://serverhost:port
        <br>
        (Default on reset is redis://localhost:6379)
      </span>
    </div>
  </div>
</form>
</template>

<script>
import redis from 'redis';

export default {
  name: 'ServerUrl',
  data: function() {
    return {
      redisServerUrl: null,
      hasRedisError: false
    }
  },
  methods: {
    updateRedisServerUrl: function() {
      this.hasRedisError = false

      this.client = redis.createClient(this.redisServerUrl, {
        retry_strategy: () => {
          console.log(`Unable to connect to server: ${this.redisServerUrl}`)
          this.hasRedisError = true
        }
      })
      if (!this.hasRedisError) {
        console.log(`redisServerUrl changed to ${this.redisServerUrl}`)
        this.$emit('update:redisServerUrl', this.redisServerUrl)
      }

    },
    resetRedisServerUrl: function() {
      this.$emit('update:redisServerUrl', 'redis://localhost:6379')
      this.hasRedisError = false
      this.redisServerUrl = ''
    }
  }
}
//this.$emit('update:redisServerUrl', newValue)
</script>
