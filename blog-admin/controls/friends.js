const Friend = require("../models/friends")

const friend ={ list:{},add:{} }

friend.all = async (ctx, next) => {
	const list = await Friend
	.find({})
	.catch(err => ctx.throw(500, '服务器内部错误'))
	if(list){
		ctx.body = {code: 0, msg: '查询友链成功',list :list}
	}
}

friend.list = async (ctx, next) => {
	const list = await Friend
	.find({status:true})
	.catch(err => ctx.throw(500, '服务器内部错误'))
	if(list){
		ctx.body = {code: 0, msg: '查询友链成功',list :list}
	}
}

friend.add = async (ctx, next) => {
	const { name,descript,head,link } = ctx.request.body
	const add = await Friend
	.create({ name,descript,head,link })
	.catch(err => ctx.throw(500, '服务器内部错误'))
	if(add){
		ctx.body = {code: 0, msg: '添加友链成功'}
	}
}

friend.examine = async (ctx, next) => {
	const { id,status } = ctx.request.body
	console.log(this.status)
	const examine = await Friend
	.findOneAndUpdate({_id :id},{status})
	.catch(err => ctx.throw(500, '服务器内部错误'))
	if(examine){
		ctx.body = {code: 0, msg: '审核成功'}
	}
}

module.exports = friend