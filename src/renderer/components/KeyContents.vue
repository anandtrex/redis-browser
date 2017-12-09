<template>
  <div class='card'>
    {{ currentKeyValue }}
  </div>
</template>

<script>
export default {
  name: 'KeyContents',

  components: {
  },

  data: function () {
    return {
      keyValueMap: {
        'One': {'a': 3},
        'Two': {'b': 6},
        'Three': {'c': 9}
      },
      currentKeyValue: null
    }
  },

  props: ['currentKey'],

  mounted: function () {
    console.log('Loading Key Contents!')
  },

  methods: {
  },

  watch: {
    currentKey: function () {
      console.log("Current key changed")
      this.currentKeyValue = this.keyValueMap[this.currentKey]
    }
  }
}
</script>
