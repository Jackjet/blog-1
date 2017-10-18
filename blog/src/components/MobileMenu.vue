<template>
	<div class="mobile-menu">
		<div class="info">
			<img src="./../assets/small_4.jpg" alt="">
			<p>羽叶千寻</p>
		</div>
		<ul class="nav-menu">
			<router-link tag="li" to="/">首页</router-link>
			<router-link tag="li" to="/article">CSS</router-link>
			<li>JavaScript</li>
			<li>Nodejs</li>			
			<router-link tag="li" to="/links">友情链接</router-link>
			<li>关于</li>
		</ul>
		<div class="contact">
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
</template>

<script>
import icon from "@/components/iconfont"
</script>

<style lang="scss">
.mobile-menu{
	width:70%;
	position:fixed;
	height:100%;
	top:0;
	left:-70%;
	background:#fff;
	z-index:1000;
	transition:all 0.5s;
	.info{
		background:-webkit-repeating-linear-gradient(270deg,#fd4c5d, #ffa5c7);		
		display:flex;
		text-align:center;
		flex-direction:column;
		justify-content:space-around;
		img{
			border-radius:50%;
			width:80px;
			display:block;
			margin:15px auto;
		}
		p{
			color:#fff;
			font-size:20px;
			font-weight:900;
			line-height:35px;
		}
	}
	.nav-menu{
		border-bottom:1px solid #bfcbd9;
		li{
			height:48px;
			line-height:48px;
			padding-left:25px;
		}
	}
	.contact{
		ul{
			display:flex;
			justify-content:space-around;
			padding:15px 0;
			.icon{
				width: 30px;
				height: 30px;
				fill: #2a2a2a;
				overflow: hidden;
			}
		}
	}
}



</style>