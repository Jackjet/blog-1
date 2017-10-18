<template>
	<div class="welcome">
		<title-nav>
			欢迎
		</title-nav>
		<div class="survey">
			<div class="article"></div>
			<div class="view"></div>
			<div class="like"></div>
			<div class="friend"></div>
		</div>
		<up-load></up-load>
	</div>
</template>
<script>
import UpLoad from '@/components/img'
import TitleNav from '@/components/title'
export default{
	components:{
		UpLoad,
		TitleNav
	}
}
</script>
<style lang="scss">
	.survey{
		display: flex;
		justify-content:space-between;
		.article{
			background:#20A0FF;
			height:96px;
			width:24%;
			border-radius:5px;
		}
		.view{
			background:#13CE66;
			height:96px;
			width:24%;
			border-radius:5px;
		}
		.like{
			background:#F7BA2A;
			height:96px;
			width:24%;
			border-radius:5px;
		}
		.friend{
			background:#FF4949;
			height:96px;
			width:24%;
			border-radius:5px;
		}
	}
</style>