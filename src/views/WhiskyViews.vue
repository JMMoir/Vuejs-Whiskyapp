<template lang="html">
  <div id='view'>
    <WhiskyList :whiskies='whiskies'/>
    <WhiskyDetail v-if='selectedWhisky' :whisky='selectedWhisky'/>
  </div>
</template>

<script>
import WhiskyList from '@/components/WhiskyList.vue'
import WhiskyDetail from '@/components/WhiskyDetail.vue'
import {eventBus} from '@/main.js'
export default {
  data(){
    return{
      whiskies: [],
      selectedWhisky: null
    }
  },
  components:{
    WhiskyList,
    WhiskyDetail
  },
  mounted(){
    this.getDram();

    eventBus.$on('whisky-selected', (whisky) => {
      this.selectedWhisky = whisky
    })
  },
  methods:{
    getDram(){
      const promises = (Array.from({length: 38}, (v, k) => k+1)).map((num) => {
        return fetch(`https://evening-citadel-85778.herokuapp.com/whiskey/?format=json&page=${num}`)
        .then(response => response.json())
      })
      Promise.all(promises)
      .then(data => this.whiskies = data.reduce((newArray, whiskyArray) => newArray.concat(whiskyArray.results), []))
      .then(()=> this.sortWhisky('title'));
    },
    sortWhisky(property){
      this.whiskies.sort((a,b) => {
        return a[property] < b[property] ? -1 : 1
      })
    }
  }
}
</script>

<style lang="css" scoped>
#view {
  display: flex;
  justify-content: space-around;
}
</style>
