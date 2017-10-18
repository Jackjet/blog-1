<template>
	<div class="article-nav">		
		<div class="head">
			<div class="contain">
				<img src="./../assets/logo.png" alt="">
				<ul class="article-menu">
					<router-link tag="li" to="/">首页</router-link>
					<router-link tag="li" to="/article">CSS</router-link>
					<li>JavaScript</li>
					<li>Nodejs</li>			
					<router-link tag="li" to="/links">友情链接</router-link>
					<li>关于</li>
				</ul>
				<ul class="contact">
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
			<div class="author">
				<h1>遇到了 Vuejs 使用 Sortable 进行排序数据更新了 Dom 没更新Q</h1>
				<div class="author-info">
					<img src="./../assets/small_4.jpg" alt="">
					<div><p class="name">yuyeqianxun</p><p class="time">9月22,2017</p></div>
				</div>
			</div>
		</div>
	</div>
</template>


<style lang="scss" scoped>
@media screen and (max-width: 767px){
	.article-nav{	
		width: 100%;
		background: #fff;   
		font-size: 12px;
		top: 0;
		font-weight:600;
		position: fixed;
		padding-top:0;
		padding-bottom:25px;
		.contain{
			display:none
		}
		.author{
			background:#00c1de;
			position:relative;
			h1{
				text-align:center;
				padding:8px 45px 45px;
				color:#fff;
				font-size:18px;
			}
			.author-info{
				width:96%;
				display:flex;
				position:absolute;
				background:#fff;
				left:50%;
				margin-left:-48%;
				bottom:-25px;
				padding:5px;
				box-sizing:border-box;
					img{
						border-radius:50%;
						width:40px;
						height:40px;
					}
					div{
						margin-left:15px;
						.name{
							font-size:20px;
						}
					}
			}
		}
	}
}
@media screen and (min-width: 768px){
	.article-nav{	
		width: 100%;
		background: #fff;   
		font-size: 12px;
		top: 0;
		font-weight:600;
		position: fixed;
		padding-top:0;
		border-bottom: 1px solid #ffa5c7;
		.head{
			width: 100%;
			top: 0;
			left: 0;
			background:#fff;
			z-index: 999;
			.contain{
				width: 100%;
				display:flex;
				justify-content:space-between;
				padding:0 30px;
				box-sizing: border-box;
				margin:0 auto;
				height: 46px;
				.article-menu{
					width:524px;
					display:flex;
					li{
						margin-right: 35px;
						padding: 0 6px;
						line-height: 46px;
						font-size:14px;
					}
				}
				.contact{
						display:none;
				}
			}
			.author{
				display:none;
			}
		}
				
	}
}
@media screen and (min-width: 1367px){
	.contain{
		width: 1160px!important;
		.contact{
			display:flex;
			li{
				padding: 8px 10px;
			}
		}				
	}
}	
.router-link-exact-active{
	color:#67bdcd;
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