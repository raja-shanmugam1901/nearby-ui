<template>
    <div class="container">
     <div class="alt">Amenities</div>
      <div>
        <div class="row" v-for="item in amenities" :key="item.id">
          <div class = " col-5 d-flex " v-for="val in item.Amenities" :key="val" >
            <img v-if="val === constants.AMENITIES.soap" src="../assets/soap.png" class="amenties-soap"/>
            <img v-if="val === constants.AMENITIES.wash" src="../assets/wash.png" class="amenties-wash"/>
            <img v-if="val === constants.AMENITIES.lock" src="../assets/lock.png" class="amenties-lock"/>
            <img v-if="val === constants.AMENITIES.faucet" src="../assets/shower.png" class="amenties-shower"/>
            <img v-if="val === constants.AMENITIES.light"  src="../assets/light.png" class="amenties-light"/>
            <img v-if="val === constants.AMENITIES.window"  src="../assets/security.png" class="amenties-window"/>          
          <div class="content">{{val}}</div>
         </div>
       </div>
    </div>
   <button class="btn btn-default">{{constants.BUTTON_TEXT.show}}</button>
   
   <div class="rating">
    <p>{{constants.SECURITY}}</p>
     <div class="col1" >
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
       </div>
    </div>
    <div class="rating">
    <p>{{constants.HYGIENE}}</p>
       <div class="col2" >
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
       </div>    </div>
    </div>
</template>
<script lang="ts" src="@/controller/Amenities.ts">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/Aminities.scss";
</style>