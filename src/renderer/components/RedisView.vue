<template>
<div class="container">
  <div class='columns'>
    <div class="column col-3 sidebar">
      <SideKeys v-on:setCurrentKeyEvent='setCurrentKey'
                v-bind:redisServerUrl='redisServerUrl'>
      </SideKeys>
    </div>
    <div class="column col-9 contents">
      <KeyContents v-bind:currentKey='currentKey'
                   v-bind:redisServerUrl='redisServerUrl'>

      </KeyContents>
    </div>
  </div>
  <ServerUrl @update:redisServerUrl='updateRedisServerUrl'></ServerUrl>
</div>
</div>
</template>

<script>
import SideKeys from './SideKeys'
import KeyContents from './KeyContents'
import ServerUrl from './ServerUrl'

export default {
  name: 'RedisView',
  data: function() {
    return {
      currentKey: null,
      redisServerUrl: 'redis://localhost:6379',
    }
  },
  mounted: function() {
    console.log('Loading Redis Browser!')
  },
  components: {
    SideKeys,
    KeyContents,
    ServerUrl
  },
  methods: {
    setCurrentKey: function(currentKey) {
      console.log(`Setting current key as ${currentKey}`);
      this.currentKey = currentKey
    },
    updateRedisServerUrl: function (newRedisServerUrl){
      this.redisServerUrl = newRedisServerUrl
      console.log(`ss redisServerUrl changed to ${newRedisServerUrl}`)
    }
  },
  watch: {

  }
}
</script>

<style>
.sidebar,
.contents {
  overflow: scroll;
  overflow-x: hidden;
  max-height: 90vh;
  min-height: 90vh;
}
</style>
