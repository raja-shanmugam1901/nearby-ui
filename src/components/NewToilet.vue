<template>
  <div class="new-report">
    <button class="new-report" v-on:click="showModal">
      Report New
      <i class="fa fa-plus"></i>
    </button>
    <modal name="report-modal" width="350" height="400">
      <div class="header">
        <p>Report New Toilet</p>
      </div>
      <div class="formBody">
        <div class="form-group">
          <label>Title</label>
          <input type="text" class="form-control title" v-model="report.title" />
        </div>
        <div class="form-group">
          <label>Location</label>
          <input type="text" class="form-control location" v-model="report.location" />
        </div>
        <div class="form-group">
          <label>Extra info</label>
          <textarea class="form-control extra" rows="1" v-model="report.extraInfo"></textarea>
        </div>
        <div class="amenties">
          <p class="present">Amenities present</p>
          <p class="present">Toilet Type</p>
          <div class="check-group d-flex row-3">
            <input type="checkbox" id="Male" value="Male" />
            <p class="p1">Male</p>
            <input type="checkbox" id="Female" value="Female" />
            <p class="p2">Female</p>
            <input type="checkbox" id="Child" value="Child" />
            <p class="p3">Child</p>
          </div>
          <div class="check-group d-flex row-3">
            <input type="checkbox" id="Disabled" value="Disabled"/>
            <p class="p4">Disabled</p>
            <input type="checkbox" id="Unisex" value="Unisex"  />
            <p class="p5">Unisex</p>
            <input type="checkbox" id="Dump point" value="Dump point" />
            <p class="p6">Dump point</p>
          </div>
          <div class="d-flex justify-content-center footer">
            <button
              class="add"
              data-dismiss="modal"
              @click="checkForm"
            >Add</button>
            <button class="cancel" @click="cancel">Cancel</button>
          </div>
        </div>
      </div>
    </modal>
    <modal name="alert-modal" width="300" height="140">
      <div class="modal-header"></div>
      <div class="modal-body">
        <h6 style="color:black">New Loo Type Added Successfully</h6>
      </div>
      <div class="modal-footer">
        <button class="ok" @click="hideAlert()">Ok</button>
      </div>
    </modal>
  </div>
</template>
<script lang="ts" src="@/controller/NewToilet.ts">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/NewToilet.scss";
</style>