const Tag = require("../models/tag")

const tag ={ list:{},add:{},delete:{} }

tag.list = async (ctx, next) => {
	const list = await Tag
	.find({})
	.catch(err => ctx.throw(500, '服务器内部错误'))
	if(list){
		ctx.body = {code: 0, msg: '查询列表成功',list :list}
	}
}

tag.add = async (ctx, next) => {
	const { tag } = ctx.request.body
	const add = await Tag
	.create({ tag })
	.catch(err => ctx.throw(500, '服务器内部错误'))
	if(add){
		ctx.body = {code: 0, msg: '添加分类成功'}
	}
}

tag.delete = async (ctx, next) => {
	const { name } = ctx.request.body
	const tag = await Tag
	.findOneAndRemove({name:name})
	.catch(err => ctx.throw(500, '服务器内部错误'))
	if(tag){
		ctx.body = {code: 0, msg: '删除成功'}
	}
}

module.exports = tag