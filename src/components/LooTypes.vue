<template>
  <div>
    <div v-for="item in amenties" :key="item.id">
      <div class="loo-types" v-for="loo in item.Toilets" v-bind:key="loo">
        <div class="d-flex">
          <img src="@/assets/western.png" class="western" />
          <div class="cls">
            <p>{{loo}}</p>
            <i class="fa fa-restroom" aria-hidden="true">
            <i class="fa fa-wheelchair" aria-hidden="true"></i>
            <img src="@/assets/sit.png" class="ml-1" width="15px"/>
            </i>
          </div>
          <div class="float-right">
            <div class="d-flex md">
              <i class="fa fa-location-arrow" aria-hidden="true"></i>
              <p class="direction">{{constants.DIRECTIONS}}</p>
              <br />
            </div>
            <div class="d-flex">
              <img src="@/assets/gallery.png" width="25px" class="img" />
              <img src="@/assets/info.png" width="27px" class="img" />
              <img src="@/assets/warning.png" width="25px" class="warn" />
              <img class="delete" src="../assets/delete.png" @click="deleteToilet(loo)" width="15px" height="15px"/>
            </div>
          </div>
        </div>
        <Amenities></Amenities>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="@/controller/LooTypes.ts">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/LooTypes.scss";
</style>