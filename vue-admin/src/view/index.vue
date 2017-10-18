<template>
	<div class="index">
		<nav-head></nav-head>
		<div class="contain">
			<nav-menu></nav-menu>
			<div class="main">
				<router-view/>
			</div>
		</div>
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
.index{
	height:100%;
	.contain{
		display:flex;
		height:100%;
		.main{
			margin:40px 40px;
			padding:20px 40px;
			background-color:#fff;
			flex:1;
			overflow-y: scroll;
		}
		.main::-webkit-scrollbar{display: none;}
	}
}
</style>