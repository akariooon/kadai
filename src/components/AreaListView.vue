<template>
  <b-container>
    <b-row>
      <b-col>
        <a-list v-bind:areaData='areas'></a-list>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import bContainer from 'bootstrap-vue/es/components/layout/container'
import bCol from 'bootstrap-vue/es/components/layout/col'
import bRow from 'bootstrap-vue/es/components/layout/row'
import ariaList from '@/components/AreaList.vue'

export default {
  name: 'AreaListView',
  data: function(){
    return{
      areas: 
      [  // 要修正：RESAS APIから取得する
        {areaName:'北海道'},
        {areaName:'青森県'},
        {areaName:'秋田県'},
        {areaName:'岩手県'},
        {areaName:'山形県'},
      ],
    }
  },
  components:{
    'b-container' : bContainer,
    'b-col' : bCol,
    'b-row' : bRow,
    'area-list' : areaList,
  },
}
</script>

<style>

</style>
