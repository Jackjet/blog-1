/*
*引入mongoose
*/
const mongoose = require('mongoose')
/*
*定义user模型
*/
const usersSchema = new mongoose.Schema({
	tag:String
})
/*
*articles表单
*/
const Tag = mongoose.model('Tag',usersSchema)

module.exports = Tag