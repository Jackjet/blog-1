<template>
	<div class="info">
		<title-nav>
			文章列表
		</title-nav>
		<el-table
		border
		:data="tableData"
		style="width: 100%">
			<el-table-column
		      type="selection"
		      width="55">
		    </el-table-column>
			<el-table-column
			prop="title"
			label="标题"
			width="220">
			</el-table-column>
			<el-table-column
			prop="descript"
			label="描述"
			width="500">
			</el-table-column>
			<el-table-column
			prop="tag"
			label="分类"
			width="180">
			</el-table-column>
			<el-table-column
			prop="tip"
			label="标签"
			>
			</el-table-column>
			<el-table-column
			prop="author"
			label="作者"
			width="180">
			</el-table-column>
			<el-table-column
			label="修改"
			width="140"
			>
				<template scope="scope">
					<el-button size="small" @click="edit(scope.row)" type="primary">修改</el-button>
					<el-button size="small" @click="dele(scope.row)" type="danger">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
import http from '@/api/http'
import api from '@/api/api'
import TitleNav from '@/components/title'
import prompt from '@/utils/prompt'
export default {
	data() {
		return {
			tableData: []
		}
	},
	components: {
		TitleNav
	},
	mounted (){
		setTimeout(()=>{
			this.list()
		},20)	
	},
	methods: {
		list: async function () {
			const res = await http.get(api.articles)
			if (res.data.code===0) {
				this.tableData=res.data.list
			}else{
				prompt.no(res.data.msg)
			}
		},
		edit (row) {
	      // this.$router.push(`/add?id=${row._id}`)
	      this.$router.push({ name: 'edit', params: { id: row._id }})
	    },
	    dele: async function (row) {
	    	let params ={id:row._id}
			const res = await http.delete(api.articles,params)
			if(res.data.code===0){
				prompt.ok(res.data.msg)
				this.list()
			}else{
				prompt.no(res.data.msg)
				
			}
		}
	}
}
</script>