<template lang="html">
  <div id='listContainer'>
    <ul>
      <WhiskyListItem v-for='(whisky, index) in whiskies' :whisky='whisky' :index='index'/>
    </ul>
  </div>
</template>

<script>
import WhiskyListItem from '@/components/WhiskyListItem.vue'
export default {
  name: 'whisky-list',
  props:['whiskies'],
  components:{
    WhiskyListItem
  }
}
</script>

<style lang="css" scoped>
#listContainer{
color: rgb(116, 124, 142);
font-size: 15px;
overflow: auto;
height: 500px
}

</style>
