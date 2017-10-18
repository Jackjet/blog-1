/*
*引入mongoose
*/
const mongoose = require('mongoose')
/*
*定义user模型
*/
const usersSchema = new mongoose.Schema({
	username:String,
	password:String,
	token: String
})
/*
*articles表单
*/
const User = mongoose.model('User',usersSchema)

module.exports = User