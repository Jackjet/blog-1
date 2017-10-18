<template>
	<div class="add">
		<title-nav>
			文章添加
		</title-nav>
		<div class="row"><span>文章标题</span><el-input v-model="title" placeholder="请输入标题" class="kuan"></el-input></div>
		<div class="row"><span>文章描述</span><el-input type="textarea" :rows="2" placeholder="请输入描述" v-model="descript" class="kuan"></el-input></div>
		<div class="row"><span>文章分类</span><el-radio-group v-model="chosed" class="kuan"  >
			<el-radio-button :label="item.tag"  v-for="(item,index) in tags" :key="index"></el-radio-button>
		</el-radio-group></div>
		<div class="row"><span>文章内容</span><div id="edit"><mavon-editor style="height: 100%" ref="content" class="kuan" :subfield="show"></mavon-editor></div></div>		
		<div class="row"><span>文章作者</span><el-input v-model="author" placeholder="请输入作者" class="kuan"></el-input></div>
		<div class="row"><span>文章标签</span><el-input v-model="tip" placeholder="请输入标签" class="kuan"></el-input></div>
		<el-button type="primary" @click="add()" style="margin:0 0 40px 125px">提交</el-button>
	</div>
</template>
<script>
import http from '@/api/http'
import api from '@/api/api'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import TitleNav from '@/components/title'
import prompt from '@/utils/prompt'

export default {
	data() {
		return {
			title: '',
			content:'',
			descript: '',
			author: '',
			tags:'',
			chosed: 'JavaScript',
			tip:'',
			show:false
		}
	},
	components: {
		mavonEditor,
		TitleNav
	},
	mounted (){
		setTimeout(()=>{
			this.tagList()
		},20)	
	},
	methods: {
		add: async function () {
			let data = {
				title:this.title,
				descript:this.descript,
				content:this.content,
				chosed:this.chosed,
				author:this.author,
				tip:this.tip
			}
			const res = await http.post(api.add, data)
			if(res.data.code===0){
				prompt.ok(res.data.msg)
				this.list()
			}else{
				prompt.no(res.data.msg)
				
			}

		},
		tagList:async function(){
			const res = await http.get(api.tag)
			if(res.data.code===0){
				this.tags=res.data.list
			}
		},
		list () {
			this.$router.push({ name: '文章列表'})
		}
	}
}
</script>
<style lang="scss">
.add{
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
		#edit{
			height: 380px;
			.v-note-wrapper{
				border: 1px solid #bfcbd9;
				border-radius: 4px;
				.v-note-op,.v-note-panel{
					box-shadow:none
				}
			}
		}
	}
}
</style>