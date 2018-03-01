<template>
<v-dialog v-model="dialog" persistent max-width="500px">
  <v-card>
    <v-card-title>
      Redis Server URL:
    </v-card-title>
    <v-card-text>
      <v-text-field name="input-1" label="redis://servername[:port]" id="testing" v-model='redisServerUrl'>
      </v-text-field>
      <v-alert type="error" :value="true" v-if='hasRedisError'>
        Invalid redis url. Enter url of the form redis://serverhost:port
      </v-alert>
    </v-card-text>
    <v-card-actions>
      <v-btn color="" @click='updateRedisServerUrl'>OK</v-btn>
      <v-btn color="" @click='resetRedisServerUrl'>Reset</v-btn>
      <v-btn color="darken-1" flat @click.native="closeDialog">Close</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>

<script>
import redis from 'redis'

export default {
  name: 'ServerUrl',
  data: function() {
    return {
      redisServerUrl: null,
      hasRedisError: false
    }
  },
  props: ['dialog'],
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
    },
    closeDialog: function() {
      this.$emit('closeDialog')
    }
  }
}
// this.$emit('update:redisServerUrl', newValue)
</script>
