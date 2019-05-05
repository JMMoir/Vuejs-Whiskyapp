<template lang="html">
  <div class="">
    <ul>
      <WhiskyListItem v-for='each in whisky.comparables' :whisky='each'/>
    </ul>
      <WhiskyDetail :whisky='selectedWhisky'/>
  </div>
</template>

<script>
import WhiskyListItem from '@/components/WhiskyListItem';
import WhiskyDetail from '@/components/WhiskyDetail';
import {eventBus} from '@/main.js';


export default {
  name:'more',
  props: ['whisky'],
  components:{
    WhiskyListItem,
    WhiskyDetail
  },
  data(){
    return{
      selectedWhisky: null
    }
  },
  mounted(){
    eventBus.$on('more-selected', (whisky) => {
      this.selectedWhisky = whisky
    })
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

#image{
  max-width:100%;
  max-height:100%;
}

.whisky-details {
  font-variant: small-caps;
}
#whiskyDetail {
  box-sizing: border-box;
  height: auto;
  width: 25vw;
  padding: 10px;
  border: 1px solid black;
  margin-right:10px;
}

#detailWrapper {
  box-sizing: border-box;
  padding: 10px;
  height: 100%;
  border-radius: 3px;
}

#flexWrapper {
  display: flex;
  justify-content: space-between;
}

#left, #right {
  width: 45%;
}

#right img {
  width: 100%;
}

#left p:first-child {
  margin-top: 0;
}

h2 {

  margin: 10px 0 20px;
  padding: 0;
  align-items: center;
}

li {
    color:white;
    width: 40vw;
    list-style-type: none;
    display: block;
    background: #000;
    font-size: 16px;
    margin: 10px 0;
    padding: 10px;
    cursor: pointer;
    transition: 0.1s all ease-in;
    text-align: center;
    border-radius: 25px
  }
</style>
