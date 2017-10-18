<template>
	<div class="page">
		<div class="links">
			<div class="join">
				<img src="./../assets/links.png" alt="" width="100%">
				<div class="my-link">
					<p>羽叶千寻</p>
					<p>www.yuyeqianxun.com</p>
					<p>www.yuyeqianxun.com/head.png</p>
				</div>
				<form>
					<input type="text" placeholder="昵称" v-model="name">
					<input type="text" placeholder="链接" v-model="link">
					<input type="text" placeholder="头像" v-model="head">
					<input type="text" placeholder="简介" v-model="descript">
					<div type="text" class="btn" @click="submit()">发射</div>
				</form>
			</div>
			<div class="list">
				<ul id="scrollbar">
					<li v-for="(item,index) in list" :key="index"><img :src="item.head" alt="" class="avator"><div class="info"><div class="round"></div><p class="name"><a :href="item.link" target="_blank">{{item.name}}</a></p><p class="intro">{{item.descript}}</p></div></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import http from '@/api/http'
	import api from '@/api/api'
	export default {
		data() {
			return {
				name:'',
				descript:'',
				head:'',
				link:'',
				list:[]
			}
		},
		mounted (){
			setTimeout(()=>{
				this.links()
			},20)	
		},
		methods: {
			submit: async function () {
				const data={
					name:this.name,
					descript:this.descript,
					head:this.head,
					link:this.link
				}
				const res = await http.post(api.friends,data)
				if (res.data.code===0) {
					
				}
			},
			links:async function () {
				const res = await http.get(api.friends)
				if (res.data.code===0) {
					this.list=res.data.list
				}
			}
		}
	}
</script>
<style lang="scss">
@media screen and (max-width: 767px){
	#scrollbar{
		li{
			width:95%;
			border-radius:5px;
			display:flex;
			box-shadow: 0 1px 2px #aec1c5;
			margin:15px auto;
			height:96px;
			padding:8px;
			box-sizing:border-box;
			background:#fff;
			img{
				height:100%;
				border-radius:5px;
			}
			.info{
				margin-left:20px;
				display:flex;
				justify-content:center;
				flex-direction:column;
				.name{
					font-weight:900;
					padding:5px 0;
					a{
						color:#a4abb3;
						text-decoration:none;
					}
				}
				.intro{
					font-size:14px;
					color:#a4abb3;
				}
			}
		}
	}
}
@media screen and (min-width: 768px){	
	#scrollbar{
		display:flex;
		flex-wrap:wrap;
		justify-content:space-around;
		li{
			display:flex;
			margin:30px 0; 
			img{
				width:80px;
				height:80px;
				border-radius:50%;
			}
			.info{
				position:relative;
				overflow:hidden;
				width:180px;
				margin-left:-10px;
				border:1px solid #2ab69d;
				border-left:none;
				padding-left:40px;
				display:flex;
				flex-direction:column;
				justify-content:center;
				.round{
					display:block!important;
					width:98px;
					height:98px;
					border-radius:50%;
					position:absolute;
					border:1px solid #2ab69d;
					left:-80px;
					top:-11px;
				}				
				.name{
					text-align:left;
					color:#2ab69d;
					font-weight:600;
					a{
						color:#2ab69d;
						text-decoration:none;
					}
				}
				.intro{
					color:#2ab69d;
				}
			}
		}
	}
}
@media screen and (min-width: 1367px){
	.page{
		width:100%;
		height:100%;
		background:rgba(255,255,255,0.9) url(./../assets/nazimei.jpg) center left no-repeat;	
		background-size:cover;
	}
	.links{
		display: flex;
		width: 1160px;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -560px;
		margin-top: -380px;
		box-shadow: 0 2px 28px 0 rgba(65, 65, 65, 0.4), 0 2px 28px 0 rgba(65, 65, 65, 0.4);
		border-radius:8px;
		.join{
			display:block!important;
			border-radius: 8px 0 0 8px;
			background:rgba(242,245,247,0.9);
			height: 760px;
			flex: 1;
			.my-link{
				width: 320px;
				height: 80px;
				background: #fff;
				border: 1px dashed #98e1f2;
				border-radius: 15px;
				padding: 8px 35px;
				margin:30px auto;
				display: flex;
				justify-content: space-around;
				flex-direction: column;
				p{
					color:#2ab69d;
				}
			}
			form{
				width: 300px;
				margin: 0 auto;
				input{
					width: 250px;
					height: 36px;
					border: 1px solid #bfcbd9;
					background-color: #fff;
					border-radius: 18px;
					display: block;
					margin-bottom: 20px;
					padding:0 18px; 
				}
				input:focus{
					outline: none;
					border-color: #98e1f2;
				}
				.btn{
					border: 0;
					background-color: #98e1f2;
					color: #fff;
					text-align: center;
					font-size: 16px;
					position: relative;
					width: 288px;
					height: 36px;
					border-radius: 18px;
					overflow:hidden;
					line-height: 36px;
					cursor: pointer;
				}
			}
		}
		.list{
			border-radius: 0 8px 8px 0;
			background:#fff;
			flex: 1;
			height: 760px;
			position: relative;
			#scrollbar{
				width: 80%;
				height: 80%;
				display:inline-block;
				overflow: auto;
				-webkit-overflow-scrolling : touch;  
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				margin:10%;
				li{
					width: 20%;
					margin:10px 10px; 
					display:inline-block;

					img{
						width: 100%;
						border-radius: 50%;
					}
					.info{
						border:0;
						margin:0;
						padding:5px 0;
						width:100%;
						.name{
							text-align:center;
							color:#2ab69d;
							font-weight:700;
							a{
								color:#2ab69d;
								text-decoration:none;
							}
						}
						.round,.intro{
							display:none!important;
						}
					}
				}
			}
			#scrollbar::-webkit-scrollbar{
				width:8px;
			}
			#scrollbar::-webkit-scrollbar-thumb{
				border-radius:6px;
				background: -webkit-repeating-linear-gradient(145deg,#98e1f2, #2ab69d);
			}
			#scrollbar::-webkit-scrollbar-track{
				background-color:#fff;
				border-radius:6px;
			}
		}
	}
}
.links{
	.join{
		display:none;
	}
	.list{
		.round{
			display:none;
		}
	}
}

</style>