<template>
  <div id="footer" :style="{ backgroundImage: 'url(\'' + background + '\')' }">
		<img id="FooterIMG" :src= "imgSrc"/>
	</div>
</template>

<script>
export default {
	data() {
		return {
            imgSrc: '../src/img/FooterIMG.png',
            background: '../src/img/FooterBG.png'
		}
	}
}
</script>
