<template>
	<div class="article">
		<article-head></article-head>
		<article-main></article-main>
	</div>	
</template>

<script>
import ArticleHead from '@/components/ArticleHead'
import ArticleMain from '@/components/ArticleMain'

export default {
	name: 'index',
	components:{
		ArticleHead,
		ArticleMain
	},
}
</script>

<style lang="scss">

</style>