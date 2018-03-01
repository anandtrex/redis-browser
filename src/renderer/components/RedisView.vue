<template>
<v-app>
  <v-toolbar app fixed clipped-left>
    <v-toolbar-title>Redis Browser</v-toolbar-title>
  </v-toolbar>
  <SideKeys @setCurrentKeyEvent='setCurrentKey' :redisServerUrl='redisServerUrl'>
  </SideKeys>
  <KeyContents :currentKey='currentKey' :redisServerUrl='redisServerUrl'>
  </KeyContents>
  <ServerUrl @update:redisServerUrl='updateRedisServerUrl'
    :dialog='dialog' @closeDialog='closeDialog'>
  </ServerUrl>
  <AboutDialog :aboutDialog='aboutDialog' @closeDialog='closeDialog'>
  </AboutDialog>
  <v-footer app fixed>
    <v-btn dark @click.stop="dialog = true">Settings</v-btn>
    <v-btn dark @click.stop="aboutDialog = true">About</v-btn>
  </v-footer>
</v-app>
</template>

<script>
import SideKeys from './SideKeys'
import KeyContents from './KeyContents'
import ServerUrl from './ServerUrl'
import AboutDialog from './AboutDialog'

export default {
  name: 'RedisView',
  data: function() {
    return {
      currentKey: null,
      redisServerUrl: 'redis://localhost:6379',
      dialog: false,
      aboutDialog: false
    }
  },
  mounted: function() {
    console.log('Loading Redis Browser!')
  },
  components: {
    SideKeys,
    KeyContents,
    ServerUrl,
    AboutDialog
  },
  methods: {
    setCurrentKey: function(currentKey) {
      console.log(`Setting current key as ${currentKey}`)
      this.currentKey = currentKey
    },
    updateRedisServerUrl: function(newRedisServerUrl) {
      this.redisServerUrl = newRedisServerUrl
      console.log(`ss redisServerUrl changed to ${newRedisServerUrl}`)
    },
    closeDialog: function(){
      this.dialog = false
      this.aboutDialog = false
    }
  },
  watch: {

  }
}
</script>

<style>
/* .sidebar,
.contents {
  overflow: scroll;
  overflow-x: hidden;
  max-height: 90vh;
  min-height: 90vh;
} */

/* .container {
  min-height: 90vh
} */
</style>
