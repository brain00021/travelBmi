<template lang="pug">
div
  h1 {{msg}}
  b-alert(:show="show"  state="success" dismissible) test test test
  button( type="button" @click="toggleAlert") click
</template>

<script>
export default {
  name: 'travel',
  data () {
    return {
      msg: 'this is a travel website',
      show: false,
    }
  },
  methods: {
    toggleAlert: function() {
      this.show =  !this.show
    }
  }
}
</script>
