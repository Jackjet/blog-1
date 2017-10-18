<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
import NavMenu from '@/components/Menu'
import NavHead from '@/components/Head'
export default {
	components:{
		NavMenu,
		NavHead
	},
}
</script>

<style lang="scss">
#app {
	height: 100%;
	background-color:#EFF2F7;
	overflow:hidden;
}

</style>
