<template>
  <div id="header" :style="{ backgroundImage: 'url(\'' + background + '\')' }">
		<img id="HeaderIMG" :src= "imgSrc"/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			imgSrc: '../src/img/HeaderIMG.png',
			background: '../src/img/HeaderBG.png'
		}
	}
}
</script>
