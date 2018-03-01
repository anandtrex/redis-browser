<template>
<v-dialog v-model="aboutDialog" persistent max-width="500px">
  <v-card>
    <v-card-title>
      Redis Browser
    </v-card-title>
    <v-card-text>
      Redis Browser is Cross platform GUI tool for redis that includes support for ReJSON More details at the
      <a href='https://anandtrex.github.io/redis-browser/'>website</a>.
      <br /> Report problems through
      <a href='https://github.com/anandtrex/redis-browser/issues'>Github issues</a>
      <br /><br /> - Developed by
      <a href='https://github.com/anandtrex'>@anandtrex</a>
    </v-card-text>
    <v-card-actions>
      <v-btn color="darken-1" flat @click.native="closeDialog">Close</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>

<script>
export default {
  name: 'AboutDialog',
  data: function() {
    return {}
  },
  props: ['aboutDialog'],
  methods: {
    closeDialog: function() {
      this.$emit('closeDialog')
    }
  }
}
</script>
