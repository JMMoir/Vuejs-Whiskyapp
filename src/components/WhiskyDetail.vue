<template lang="html">
  <div id='whiskyDetail'>
    <div id='detailWrapper'>
    <h2>{{whisky.title}}</h2>
    <div class="whisky-details">
      <p>Rating: {{whisky.rating}}</p>
      <img id='image':src="whisky.detail_img_url" alt="">
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'whisky-detail',
  props:['whisky']
}
</script>

<style lang="css" scoped>

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

</style>
