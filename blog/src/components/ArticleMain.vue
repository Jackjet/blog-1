<template>
	<div class="article-main">
		<div class="title">
			前端环境配置
		</div>
		<div class="body">{{articles.content}}</div>
	</div>
</template>

<script>
import http from '@/api/http'
import api from '@/api/api'
	export default {
	data () {
		return { 
			articles:[],
			id:this.$route.params.id
		}
	},
	mounted (){
		setTimeout(()=>{
			this.article()
		},20)
	},
	methods: {
		article: async function () {
			const params = this.id
			const res = await http.get(api.articles+`/${params}`)
			if (res.status===200) {
				this.articles = res.data.list
			}
		}
	}
	
}
</script>
<style lang="scss" scoped>
@media screen and (max-width: 767px){
	.article-main{
		background:#fff;
		padding:130px 25px 25px;
	}
}
@media screen and (min-width: 768px){
	.article-main{
		width:97%;
		box-shadow: 0 1px 8px #98e1f2;
		margin:50px auto;
		background:#fff;
		box-sizing:border-box;
		padding:50px;
	}
}
@media screen and (min-width: 1367px){
	.article-main{
		width:962px;						
		.title{
			text-align:center;
			font-size:20px;
			font-weight:800;
			padding:15px 0;
			border-bottom:1px solid #98e1f2;
		}
	}
}
	
</style>