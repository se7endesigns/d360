<template>
  <div id="app">

    <div class="header">
      <h2>Business Segments</h2>
    </div>


    <div class="bS">
      <div class="bs-wrapper">
        <div class="bS-header">
          <div class="bs-header__left">
            <h3>Business Segments</h3>
          </div>
          <div class="bs-header__right">
            <div class="header-icon">
              <a href="#"> + </a>
            </div>
            <div class="header-icon">
              <a href="#"> E </a>
            </div>
            <div class="header-icon">
              <a href="#"> D </a>
            </div>
            <div class="header-icon">
              <a href="#"> ?</a>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>

        <div class="bs-table__wrapper">
          <table class="bs-table" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <th> <input type="checkbox" disabled> </th>
              <th>Business Segment</th>
              <th>Sub Segment 1</th>
              <th>Sub Segment 2</th>
              <th>Sub Segment 3</th>
              <th>Sub Segment 4</th>
              <th>Sub Segment 5</th>
              <th>Sub Segment 5</th>
              <th>Sub Segment 6</th>
              <!-- <th>Sub Segment 7</th>
              <th>Sub Segment 8</th> -->
            </tr>
            <tr v-for="record in cleanData">
              <td> <input type="checkbox">  </td>
              <td> {{ record['Name'] || '-'}} </td>
              <td>{{ record['Subsegment 1']  || '-' }}</td>
              <td>{{ record['Subsegment 2']  || '-' }}</td>
              <td>{{ record['Subsegment 3']  || '-' }}</td>
              <td>{{ record['Subsegment 4']  || '-' }}</td>
              <td>{{ record['Subsegment 5']  || '-' }}</td>
              <td>{{ record['Subsegment 6']  || '-' }}</td>
<!--               <td>{{ record['Subsegment 7']  || '-' }}</td>
              <td>{{ record['Subsegment 8']  || '-' }}</td>
              <td>{{ record['Subsegment 9']  || '-' }}</td> -->
            </tr>
          </table>
        </div>


      </div>
    </div>


  </div>
</template>

<script>

import axios from 'axios'
let api_token = 'keyIeF2mytGWhtON3';

let config = {
    headers: {'Authorization': "Bearer " + api_token}
  }

var airtable_endpoint = "https://api.airtable.com/v0/app6EfLdlP4qJRmeq/businessSegments?api_";




export default {
  name: 'app',
  data () {
    return {
      records: [],
      error: []
    }
  },
  created() {
    axios.get(airtable_endpoint,config)
         .then(response => {
           this.records = response.data.records;
           console.log(response.data.records);
         })
         .catch(error => console.log(error));


  },
  computed: {
    cleanData() {
      return this.records.map( (element) => element.fields )
    }
  }
}
</script>

<style lang="scss">
  @import '../../css/variables';


  .header {
    background-color: $white;
    h2 {
      color: $lightBlue;
    }
  }

  // Buisness Segment

  .bS {
    background-color: $grey;
    min-height: 100vh;
    padding: $spacing;
  }

  .bs-wrapper {
    border: 1px solid $greyDark;
    background-color: $white;
  }
  .bS-header {
    background-color: $white;
    padding-left: $spacing;
  }
  .bs-header__left {
    float: left;
    width: 60%;
    h3 {
      color: $black;
    }
  }
  .bs-header__right {
    float: right;
    width: 40%;
    margin-top: $spacing;
  }
  .header-icon {
    border-radius: 2px;
    width: 18px;
    height: 18px;
    float: left;
    margin-right: 4px;
    text-align: center;
    font-size: 0.8em;
    padding: 3px;
    a {
      color: $black;
      text-decoration: none;
    }
    &:hover {
      background-color: $grey;
    }
  }

  // Table

  .bs-table__wrapper {
    padding-bottom: $spacing;

  }
  .bs-table {
    width: 100%;
    border: 1px solid $grey;
  }
  // Business Segment Table
  th {
    background-color: $darkBlue;
    font-weight: normal;
    color: $white;
    font-size: 0.9em;
    font-weight: normal;
    padding: 5px;
    padding-left:10px;
    text-align: left;
    border: 1px solid $grey;
  }
  tr {
    background-color: $white;
  }
  td {
    color: $greyCopy ;
    border: 1px solid $grey;
    padding: 5px;
    padding-left:10px;
  }

</style>