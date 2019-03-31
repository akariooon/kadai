<template>
<div class='areabutton'>
  <b-container>
  <b-row v-for="e in areaData" :key="e.id" >
    <area-check-box v-bind:areaName='e.areaName'></area-check-box>    
  </b-container>
</div>
</template>

<script>
import bContainer from 'bootstrap-vue/es/components/layout/container'
import bCol from 'bootstrap-vue/es/components/layout/col'
import bRow from 'bootstrap-vue/es/components/layout/row'
import areaCheckBox from '@/components/AreaCheckBox.vue'

export default {
  name: 'areaButton',
  components:{
    'b-container' : bContainer,
    'b-row' : bRow,
    'area-check-box' : areaCheckBox,    
  },
  props : {
    areaData: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.areabutton{
  background: rgb(17, 136, 192);
  border-radius: 30px;
  padding:10px;
  border:10px;
  margin: 4% 10%;
}
</style>
