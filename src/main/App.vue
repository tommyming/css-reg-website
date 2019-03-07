<template>
  <div id="app">
      <headerx></headerx>
      <div id = "body" :style="{ backgroundImage: 'url(\'' + background + '\')' }">
        <div id="title">
          <addEventMsg></addEventMsg>
			    <h1>Online registration for the following events:</h1>
        </div>
        <eventMenu></eventMenu>
        <div id = "blank">
		    </div>
        <footerx></footerx>
      </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      background: '../src/img/WebBG.jpg'

    }
  }
}
</script>

<style>

</style>
