<template>
  <ul class="menu">
    <li class="divider" data-content="KEYS">
    <li v-for="key in keys" class="menu-item">
      <a v-on:click='setCurrentKey(key)'>{{ key }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SideKeys',
  data: function() {
    return {
      keys: ['One', 'Two', 'Three']
    }
  },
  mounted: function() {
    console.log('Loading Side Keys!')
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
.custom-restricted-width {
  /* To limit the menu width to the content of the menu: */
  /*display: inline-block;*/
  /* Or set the width explicitly: */
  /* width: 10em; */
}
</style>
