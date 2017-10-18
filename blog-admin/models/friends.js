/*
*引入mongoose
*/
const mongoose = require('mongoose')
/*
*定义user模型
*/
const friendsSchema = new mongoose.Schema({
	name:String,
	descript:String,
	head:String,
	link:String,
	status:{ type: Boolean, default: false }
})
/*
*articles表单
*/
const Friend = mongoose.model('Friend',friendsSchema)

module.exports = Friend