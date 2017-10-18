<template>

<el-upload
	class="upload-demo"
	:data="qn"
	drag
	action="https://up.qbox.me/"
	:on-success="handleSuccess"
	:multiple="true"
	:before-upload="beforeUpload">
	<img v-if="head" :src="head" class="avatar">
	<i class="el-icon-upload"></i>
	<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
	<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>

</template>
<script>
import http from '@/api/http'
import api from '@/api/api'
export default{
	data() {
		return {
			qn: {
				token: '', 
				key: ''
			},
			head:''
		}
	},
	mounted (){
		setTimeout(()=>{
			this.token()
		},20)	
	},
	methods: {
		handleSuccess (res, file) {
			this.head ='http://oxjdcm94l.bkt.clouddn.com/'+ this.qn.key
		},
		token: async function(){
			const res = await http.get(api.qiniu)
			this.qn.token = res.data.upToken
		},
		beforeUpload(file) {
			this.qn.key = file.name
		}
	}
}
</script>