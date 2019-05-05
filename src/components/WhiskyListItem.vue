<template lang="html">
  <li v-on:click='handleClick'>{{whisky.title}}</li>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: 'list-item',
  props:['whisky'],
  methods:{
    handleClick(){
      eventBus.$emit('whisky-selected', this.whisky)
    }
  }
}
</script>

<style lang="css" scoped>
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
