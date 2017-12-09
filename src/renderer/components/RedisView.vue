<template>
<div class="container">
  <div class='columns'>
  <div class="column col-3">
    <SideKeys v-on:setCurrentKeyEvent='setCurrentKey'></SideKeys>
  </div>
  <div class="column col-9">
    <KeyContents v-bind:currentKey='currentKey'></KeyContents>
  </div>
</div>
</div>
</template>

<script>
import SideKeys from './SideKeys'
import KeyContents from './KeyContents'

export default {
  name: 'RedisView',
  data: function() {
    return {
      currentKey: null
    }
  },
  mounted: function() {
    console.log('Loading Redis Browser!')
  },
  components: {
    SideKeys,
    KeyContents
  },
  methods: {
    setCurrentKey: function(currentKey) {
      console.log(`Setting current key as ${currentKey}`);
      this.currentKey = currentKey
    }
  }
}
</script>
