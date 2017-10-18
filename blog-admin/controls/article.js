const Article = require("../models/article")

const article ={ list:{},itme:{},add:{},edit:{},delete:{} }

article.list = async (ctx, next) => {
	const list = await Article
	.find({})
	.catch(err => ctx.throw(500, '服务器内部错误'))
	if(list){
		ctx.body = {code: 0, msg: '查询列表成功',list :list}
	}
}

article.item = async (ctx, next) => {
	const _id = ctx.params.id
	const item = await Article
	.findOne({_id:_id})
	.catch(err => ctx.throw(500, '服务器内部错误'))
	if(item){
		ctx.body = {code: 0, msg: '查询文章成功',list :item}
	}
}

article.add = async (ctx, next) => {
	const { title, descript, content, tag, tip, author } = ctx.request.body
	const add = await Article
	.create({ title, descript, content, tag, tip,author })
	.catch(err => ctx.throw(500, '服务器内部错误'))
	if(add){
		ctx.body = {code: 0, msg: '添加成功'}
	}
}

article.edit = async (ctx, next) => {
	const { id, title, descript, content, tag, tip, author } = ctx.request.body
	const edit = await Article
	.findOneAndUpdate({_id :id},{title, descript, content, tag, tip, author})
	.catch(err => ctx.throw(500, '服务器内部错误'))
	if(edit){
		ctx.body = {code: 0, msg: '修改成功'}
	}
}

article.delete = async (ctx, next) => {
	const id = ctx.query.id
	const article = await Article
	.findByIdAndRemove({_id:id})
	.catch(err => ctx.throw(500, '服务器内部错误'))
	if(article){
		ctx.body = {code: 0, msg: '删除成功'}
	}
}

module.exports = article