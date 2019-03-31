<template>
<div class="event-row" v-on:click="select=$emit('select',eventId)">
  <b-container>
    <b-row>
      <b-col>
        {{areaName}}
      </b-col>
    </b-row>
  </b-container>
</div>
</template>
<script>

import bContainer from 'bootstrap-vue/es/components/layout/container'
import bCol from 'bootstrap-vue/es/components/layout/col'
import bRow from 'bootstrap-vue/es/components/layout/row'
import bcheckbox from 'bootstrap-vue/es/components/form-checkbox/form-checkbox-group'

export default {
  name: 'areaCheckBox',
  event: 'select',
  props:{
      areaName : {
        type: String,
        required: true,
      },
  },
  components:{
    'b-container' : bContainer,
    'b-col' : bCol,
    'b-row' : bRow,
    'b-checkbox' : bcheckbox,
  },
}
</script>

<style scoped>
.row{
  line-height: 16pt;
  margin: 12px;
  margin-top: 2%;
  margin-bottom: 2%;
  background: lightgray;
  border-radius: 10px;
}
</style>
