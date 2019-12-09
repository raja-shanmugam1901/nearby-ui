<template>
  <div>
    <Header></Header>
    <NewToilet></NewToilet>
    <router-view></router-view>
  </div>
</template>
<script lang="ts" src="@/controller/Home.ts">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/Home.scss";
</style>
