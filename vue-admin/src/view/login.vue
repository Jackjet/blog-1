<template>
	<div class="back">
		<div id="login">
			<h1>授权此台电脑登陆</h1>
			<div id="info">
				<input type="text"  v-model="username" placeholder="账号">
				<input type="password"  v-model="password" placeholder="密码">
				<button class="but" type="submit" name="submit" @click="login()">确认</button>
			</div>
		</div>
	</div>
</template>

<script>
import http from '@/api/http'
import api from '@/api/api'
import prompt from '@/utils/prompt'
export default {
	data(){
		return{
			username:'',
			password:'',
		}
	},
	computed:{
		status(){
			return this.$store.state.username
		}
	},
	methods: {
		login() {
			let data = {
				username:this.username,
				password:this.password
			}
			this.$store.dispatch('login', data)		
		}
	},
	watch:{
		status:function(){
			if (!this.$route.query.redirect) this.$router.push('/home')
					else this.$router.push(this.$route.query.redirect)
		}
	}
}
	</script>
	<style lang="scss">
	.back{
		width: 100%;
		height: 100%;
		font-family:Microsoft YaHei,sans-serif;
		margin: 0;
	// background: url(../assets/autho.jpg) center center no-repeat;
	#login{
		position: absolute;
		top: 50%;
		left:50%;
		margin: -160px 0 0 -130px;
		width: 260px;
		height: 260px;
		h1{
			color: #fff;
			margin:35px 0;
			text-align: center;
			font-size: 2em;
			font-weight:normal			
		}
		#info{
			input{
				width: 260px;
				height: 35px;
				line-height:35px;
				margin-bottom: 10px;
				outline: none;
				padding: 10px;
				font-size: 16px;
				color: #555;
				border: 1px solid #fff;
				box-sizing: border-box;
				border-radius: 4px;

			}
			.but{
				width: 260px;
				min-height: 20px;
				display: block;
				background-color: #555;
				color: #fff;
				padding: 9px 14px;
				font-size: 15px;
				border:0;
				border-radius: 5px;
				margin: 15px 0;
			}
			.but:hover{
				background:#5eb5ff;
				cursor:pointer;
			}
		}
	}
}
.color{
	width: 260px;
	height:30px;
	background:#f60;
}
</style>