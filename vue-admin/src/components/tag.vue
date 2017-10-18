<template>
	<div class="tag">
		<title-nav>
			分类管理
		</title-nav>
		<el-tag
		v-for="tag in tags"
		:key="tag.name"
		:closable="true"
		type="primary"
		@close="dele(tag)"
		>
		{{tag.tag}}
		</el-tag>
		<div class="row"><span>文章分类</span><el-input v-model="tag" placeholder="请输入分类" class="kuan"></el-input></div>
		<el-button type="primary" @click="add()" style="margin:0 0 40px 125px">提交</el-button>
</div>
</template>
<script>
import NavMenu from '@/components/Menu'
import NavHead from '@/components/Head'
import TitleNav from '@/components/title'
import http from '@/api/http'
import api from '@/api/api'
import prompt from '@/utils/prompt'
export default {
	components:{
		NavMenu,
		NavHead,
		TitleNav
	},
	data() {
		return {
			tags: [
			
			],
			tag:''
		};
	},
	mounted (){
		setTimeout(()=>{
			this.list()
		},20)	
	},
	methods:{
		dele:async function(tag){
			this.tags.splice(this.tags.indexOf(tag), 1)
			let params = {
				id:tag._id
			}
			const res = await http.delete(api.tag, params)
			if(res.data.code===0){
				prompt.ok(res.data.msg)
			}else{
				prompt.no(res.data.msg)
			}
		},
		add:async function(){
			let data ={
				tag:this.tag
			}
			const res = await http.post(api.tag, data)
			if(res.data.code===0){
				this.list()
				this.tag=''
				prompt.ok(res.data.msg)
			}else{
				prompt.no(res.data.msg)
			}
		},
		list:async function(){
			const res = await http.get(api.tag)
			if(res.data.code===0){
				this.tags=res.data.list
			}
		},
	}
}
</script>
<style lang="scss">
.tag{
	.el-tag{
		padding: 0 10px;
		height: 36px;
		line-height: 34px;
		font-size: 14px;
		margin-right:15px;
		margin-bottom:40px;
	}
	.row{
		width:65%;
		margin-bottom:40px;
		display:flex;
		content-justify:space-between;
		span{
			width:120px;
			margin-right:5px;
		}
		.kuan{
			width:880px;
			.el-radio-button__inner{
				border-radius: 4px;
				border: 1px solid #bfcbd9;
				box-shadow:none
			}
		}
	}
}
</style>