<template>
  <div id="app">
      <p>{{ test_name }}</p>
      <p>{{ test_description }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
        test_name: gon.myvar.name,
        test_description: gon.myvar.description
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
