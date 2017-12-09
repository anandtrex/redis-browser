<template>
<ul class="menu menu-list">
  <li class="divider" data-content="KEYS">
    <li v-for="key in keys" class="menu-item">
      <a v-on:click='setCurrentKey(key)'>{{ key }}</a>
    </li>
</ul>
</template>

<script>
import redis from 'redis';
import rejson from 'redis-rejson';

export default {
  name: 'SideKeys',
  data: function() {
    return {
      keys: []
    }
  },
  mounted: function() {
    console.log('Loading Side Keys!')
    this.client = redis.createClient()

    this.client.keys('*', (err, replies) => {
      this.keys = replies;
    });
  },

  methods: {
    setCurrentKey: function(currentKey) {
      console.log(`Sending event to set current key as ${currentKey}`)
      this.$emit('setCurrentKeyEvent', currentKey)
    }
  }
}
</script>

<style>
.menu-list {
  min-height: 90vh;
}
</style>
