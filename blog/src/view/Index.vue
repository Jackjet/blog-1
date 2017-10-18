<template>
	<div class="index">
		<nav-menu></nav-menu>
		<div class="main">
			<article v-for="item in articles">
				<h1>{{ item.title }}</h1>
				<ul class="icon-art"><li><svg class="icon_1" aria-hidden="true">
					<use xlink:href="#icon-yanjing"></use>
				</svg><span>{{ item.create_at }}</span></li>
				<li><svg class="icon_1" aria-hidden="true">
					<use xlink:href="#icon-zuozhe1"></use>
				</svg><span>{{ item.author }}</span></li>
				<li><svg class="icon_1" aria-hidden="true">
					<use xlink:href="#icon-yanjing"></use>
				</svg><span>{{ item.view }}</span></li></ul>
				<div class="summary">{{ item.descript }}
				</div>
				<router-link class="more" tag="div" :to="{name: 'Article', params: { id:item._id }}">阅读全文</router-link>
				<div class="time">
					<span class="month">9月</span>
					<span class="day">22</span>
				</div>
			</article>
		</div>
	</div>
</template>

<script>
import navMenu from '@/components/Head'
import http from '@/api/http'
import api from '@/api/api'

export default {
	name: 'index',
	components:{
		navMenu
	},
	data () {
		return { 
			articles:[]
		}
	},
	mounted (){
		setTimeout(()=>{
			this.article()
		},20)
	},
	methods: {
		article: async function () {
			const res = await http.get(api.articles)
			console.log(res)
			if (res.status===200) {
				this.articles = res.data.list
			}
		}
	}
	
}
</script>
<style lang="scss">
@media screen and (max-width: 767px){
	article{
		border-bottom:1px dashed #2a2a2a;
		.summary{
			text-align:left;
		}
	}
}
@media screen and (min-width: 768px){
	.main{
		margin-top:50px!important;	
		width: 100%;
		article{
			width: 90%;
			margin:0 auto 45px;
		}
		.time{
			background:#2ab69d;
			width:70px;
			height:70px;
			border-radius:50%;
			display:block;
			position:absolute;
			z-index:9;
			right:-20px;
			top:-20px;
			box-shadow: -1px 1px 7px #333;
			display:flex;
			flex-direction:column;
			color:#fff;
			justify-content:center;
			.month{

			}
			.day{
				font-size:30px;
				font-weight:900;
			}
		}
	}
}
@media screen and (min-width: 1367px){
	.main{
		margin-top:50px!important;	
		width: 1200px;
		article{
			width: 800px;
		}
		article:hover{
			box-shadow: 0 1px 8px #98e1f2;
			.time{
				box-shadow:none;
			}
		}
	}
}
.main{
	margin:0 auto;
	z-index:1;
	article{		
		height: auto;
		background-color: rgba(255,255,255,1);
		text-align: center;
		position:relative;
		padding-bottom:25px;
		h1{
			padding: 25px 20px
		}
		h1:hover{
			color: #fd4c5d;
			cursor: pointer;
		}
		.icon-art{
			font-size: 12px;
			color: #fff;
			display:flex;
			justify-content:center;
			li{
				padding:2px 10px;
				background:#666;
				border-radius:3px;		
				margin:5px;
				transition: all 0.5s;
				.icon_1{
					width: 12px;
					height: 12px;
					fill: #fff;
					margin-right:3px;
				}
			}
			li:hover{
				background:#fd4c5d;
				cursor: pointer;
			}
		}
		.summary{
			font-size: 16px;
			color: #333;
			padding: 5px 20px 25px;
			line-height: 30px;
			text-indent: 2em;
		}
		.more{
			background:#2ab69d;
			color:#fff;
			width:100px;
			height:30px;
			line-height:30px;
			font-size:12px;
			padding: 0px 20px;
			margin: 0 auto;
		}
		
	}
}
button{
	width:100px;
	height:40px;
	background:#f60;
}
</style>