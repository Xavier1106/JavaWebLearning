<template>
  <div>
    <ElementView></ElementView>
  </div>
</template>

<script>
import ElementView from "@/views/element/ElementView";

export default {
  components: {
    ElementView
  },

  data() {
    return {
      message: "Hello Vue!"
    }
  },
  methods: {}
}
</script>

<style>
</style>