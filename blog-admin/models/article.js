/*
*引入mongoose
*/
const mongoose = require('mongoose')
/*
*定义article模型
*/
const articlesSchema = new mongoose.Schema({
	title:String,
	descript:String,
	content:String,
	tag:String,
	tip:String,
	author:String,
	view:{ type: Number, default: 0 },
	like:{ type: Number, default: 0 },
	create_at: { type: Date, default: Date.now }
})
/*
*articles表单
*/
const Article =	mongoose.model('Article',articlesSchema)

module.exports = Article