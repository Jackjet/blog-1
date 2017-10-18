<template>
	<div class="links">
		<title-nav>
			友链管理
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
			prop="name"
			label="昵称"
			width="180">
			</el-table-column>
			<el-table-column
			prop="descript"
			label="描述"
			width="300">
			</el-table-column>
			<el-table-column
			prop="head"
			label="头像"
			width="400">
			</el-table-column>
			<el-table-column
			prop="link"
			label="链接"
			>
			</el-table-column>
			<el-table-column
			label="审核"
			width="100"
			>
				<template scope="scope">
					
					  <el-switch
					    v-model="scope.row.status"
					    on-color="#13ce66"
					    off-color="#ff4949"
					    on-text="通过"
					    off-text="待审"
						@change="test(scope.row)"
					    >
					  </el-switch>
					
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
	components: {
		TitleNav
	},
	data() {
      return {
        tableData:[]
      }
    },
    mounted (){
		setTimeout(()=>{
			this.list()
		},20)	
	},
	methods: {
		list: async function () {
			const res = await http.get(api.allfriends)
			if (res.data.code===0) {
				this.tableData=res.data.list
			}else{
				prompt.no(res.data.msg)
			}
		},
		test:async function (row) {
			let data ={
				id:row._id,
				status:row.status
			}
			const res = await http.post(api.examine,data)
			if (res.data.code===0) {
				prompt.ok(res.data.msg)
			}else{
				prompt.no(res.data.msg)
			}
		}
	}
}
</script>