<template>
  <div id="app">

    <custom-header></custom-header>

    <div class="addWrapper">
      <form action="#" name="formName" v-on:submit.prevent="onSubmit">
      <section>
        <h3>
          <span>
            Business Segment
          </span>
        </h3>
        <label for="name" class="d360-label">Segment Name</label>
        <input name="name"  v-model="segmentName" type="text" class="d360-input" />
      </section>

      <section>
        <h3>
          <span>
            Business Sub-Segments
          </span>
        </h3>

        <div class="add-segment__left">
          <label for="sub-segment-1"  class="d360-label">Sub Segment 1</label>
          <input name="sub-segment-1" v-model="subSegment1"  type="text" class="d360-input" />


          <label for="sub-segment-2" class="d360-label">Sub Segment 2</label>
          <input name="sub-segment-2" v-model="subSegment2" type="text" class="d360-input" />

          <label for="sub-segment-3" class="d360-label">Sub Segment 3</label>
          <input name="sub-segment-3" v-model="subSegment3" type="text" class="d360-input" />


        </div>

        <div class="add-segment__right">
          <label for="sub-segment-4" class="d360-label">Sub Segment 4</label>
          <input name="sub-segment-4" v-model="subSegment4" type="text" class="d360-input" />

          <label for="sub-segment-5" class="d360-label">Sub Segment 5</label>
          <input name="sub-segment-5" v-model="subSegment5" type="text" class="d360-input" />

          <label for="sub-segment-6" class="d360-label">Sub Segment 6</label>
          <input name="sub-segment-6" v-model="subSegment6" type="text" class="d360-input" />

         <!--  <label for="sub-segment-7" class="d360-label">Sub Segment 7</label>
          <input name="sub-segment-7" v-model="subSegment7" type="text" class="d360-input" />

          <label for="sub-segment-8" class="d360-label">Sub Segment 8</label>
          <input name="sub-segment-8" v-model="subSegment8" type="text" class="d360-input" /> -->
        </div>

        <div class="clearfix"></div>


      </section>

      <div class="form-control">
        <!-- <button name="cancel" class="cancel-button">Cancel</button> -->
        <router-link class="cancel-button" :to="{name: 'home'}" tag="button">Cancel</router-link>
        <input type="submit" class="submit-button" name="submit" value="Save">
        <div class="clearfix"></div>
        <h4 class="statusMessage" v-if="status === 200">Segment Saved </h4>

      </div>


    </form>


    </div>


  </div>
</template>

<script>

import axios from 'axios'
import customHeader from './components/customHeader.vue'

let api_token = 'keyIeF2mytGWhtON3';

let config = {
    headers: {'Authorization': "Bearer " + api_token}
  }

var airtable_endpoint = "https://api.airtable.com/v0/app6EfLdlP4qJRmeq/businessSegments?api_";





export default {
  name: 'add',
  components: {
    customHeader
  },
  data() {
    return {
      segmentName: '',
      subSegment1: '',
      subSegment2: '',
      subSegment3: '',
      subSegment4: '',
      subSegment5: '',
      subSegment6: '',
      status: ''
    }
  },
  methods: {
    onSubmit(e) {
      // Define data to send
      let dataToSend = {
          "fields": {
            "Name": this.segmentName,
            "Subsegment 1":  this.subSegment1,
            "Subsegment 2":  this.subSegment2,
            "Subsegment 3":  this.subSegment3,
            "Subsegment 4":  this.subSegment4,
            "Subsegment 5":  this.subSegment5,
            "Subsegment 6":  this.subSegment6
          }
        }



      axios.post(airtable_endpoint,dataToSend,config)
           .then(response => {
             this.records = response.data.records;
             // this.clearForm();
             // this.status = response.status;
             this.$router.push({ name: 'home'});
           })
           .catch(error => console.log(error));


    },
    clearForm() {
      this.segmentName = '',
      this.subSegment1 = '',
      this.subSegment2 = '',
      this.subSegment3 = '',
      this.subSegment4 = '',
      this.subSegment5 = '',
      this.subSegment6 = ''
    },
    clearSuccessMessage() {
      this.status = '';
    }
  }
}
</script>

<style lang="scss">
  @import '../css/variables';


  .addWrapper {
    padding: $spacing;
    background-color: $grey;
    min-height: 100vh;
  }

  section {
    background-color: $white;
    padding: $spacing;
    margin-bottom: $spacing;
    h3 {
      color: $lightBlue;
      text-transform:uppercase;
      span {
        border-bottom: 1px solid $lightBlue;
      }
    }
  }

  .d360-label {
     margin-bottom: 8px;
     display: inline-block;
     color: $greyCopy;
  }

  .d360-input {
    border: 1px solid $grey;
    color: $white;
    width: 100%;
    padding: 5px;
    color: $greyCopy;
    font-size: 1em;
    margin-bottom: $spacing;
  }

  .segment-internal {
    width: 48%;
  }

  .add-segment__left {
    @extend .segment-internal;
    float: left;
  }
  .add-segment__right {
    @extend .segment-internal;
    float: right;
  }

  .form-control {
    text-align: right;
  }

  .default-button {
    padding: 7px 15px;
    outline: none;
    appearance: none;
    border: none;
    font-size: 1em;
  }

  .cancel-button {
    @extend .default-button;
    color: $greyCopy;
    background-color: $grey;
    margin-right: 20px;
    &:hover {
        background-color: darken( $grey, 10%);
    }
  }

  .submit-button {
    @extend .default-button;
    background-color: $lightBlue;
    color: $white;
    &:hover {
      background-color: darken( $lightBlue, 10%);
    }
  }

  .statusMessage {
    color: $green;
  }


</style>