<template>
	<div class="nav">		
		<div class="head">
			<div class="contain">
				<img src="./../assets/logo.png" alt="">
				<ul>
					<li>
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-github"></use>
						</svg>
					</li>
					<li>
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-qq"></use>
						</svg>
					</li>
					<li>
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-winxin"></use>
						</svg>
					</li>
					<li>
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-zhihu"></use>
						</svg>
					</li>
					<li>
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-rss"></use>
						</svg>
					</li>
				</ul>
			</div>
		</div>
		<div ref="scroll" width="100%" class="banner">

		</div>
		<div class="menu" :class="{active: isActive}">
			<div class="contain">
				<ul>
					<router-link tag="li" to="/">首页</router-link>
					<router-link tag="li" to="/article">CSS</router-link>
					<li>JavaScript</li>
					<li>Nodejs</li>			
					<router-link tag="li" to="/links">友情链接</router-link>
					<li>关于</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import icon from "@/components/iconfont"
export default {
	data(){
		return {
			isActive:false,
		}
	},
	methods:{
		menu() {
			if(this.$refs.scroll){
				const bottom=this.$refs.scroll.getBoundingClientRect().bottom
				bottom<=46?this.isActive=true:this.isActive=false
			}			
		}
	},
	mounted() {
		window.addEventListener('scroll', this.menu)
	},
}
</script>
<style lang="scss">

.nav{	
	width: 100%;
	background: #fff;   
	font-size: 12px;
	box-sizing: border-box;
	font-weight:600;
	.head{
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background:#fff;
		z-index: 999;
		@media screen and (max-width: 767px){
			.contain{
				display:none
			}
		}
		@media screen and (min-width: 768px){
			.contain{
				width: 100%;
				display:flex;
				justify-content:space-between;
				padding:0 30px;
				box-sizing: border-box;
				margin:0 auto;
				height: 46px;
				ul{
					display:flex;
					justify-content:space-between;
					width:250px;
					li{
						padding:8px 10px;
					}
				}
			}
		}
		@media screen and (min-width: 1367px){
			.contain{
				width: 1160px;

			}
		}		
	}
	.banner{
		background:url('./../assets/banner.jpg') center center no-repeat;		
		height:180px;		
	}
	.menu{
		width: 100%;
		border-bottom: 1px solid #e5e5e5;
		line-height: 46px;
		font-size: 14px;
		position: relative;
		background:#fff;
		z-index:99;	
		ul{
			display:none;
		}
		@media screen and (min-width: 768px){
			.contain{
				width: 100%;
				display:flex;
				justify-content:space-around;
				padding:0 30px;
				box-sizing: border-box;
				margin:0 auto;
				height: 46px;
				ul{
					display:flex;
					li{
						margin-right: 35px;
						padding: 0 6px;
						.router-link-active{
							border-bottom:2px solid #fd4c5d;
						}
					}
					.router-link-exact-active{
						border-bottom:2px solid #f60;
					}
				}
			}
		}
		@media screen and (min-width: 1367px){
			.contain{
				width: 1160px;
				margin:0 auto;
				justify-content:start;
			}
		}	
	}
	.active{
		position:fixed;
		top:46px;
		box-shadow:0px 1px 7px #888888;
	}
}


.icon{
	width: 30px;
	height: 30px;
	fill: #fd4c5d;
	overflow: hidden;
}
.icon:hover{
	fill: #bfcbd9;
}


</style>