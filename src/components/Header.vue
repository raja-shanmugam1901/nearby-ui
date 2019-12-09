<template>
  <div class="appbar">
    <div class="left">
      <img src="@/assets/menu.png" height="35px" />
      <img src="@/assets/logo.png" height="35px" />
    </div>
    <div class="center">
      <input type="text" class="search" placeholder="Search by Locality/Area" />
      <img src="@/assets/search.png" class="search-icon" />
    </div>
    <div class="right">
      <img src="@/assets/filter.png" />
      <router-link to="/alert">
        <img src="@/assets/noti.png" />
      </router-link>
      <img src="@/assets/see.png" />
      <router-link to="/">
        <img src="@/assets/arrow.png" />
      </router-link>
    </div>
  </div>
</template>
<script lang="ts" src="@/controller/Header.ts">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/Header.scss";
</style>