const User = require("../models/user")

const crypto = require("crypto")

const createToken = require('../token/createToken.js');

const md5Decode = pwd => {
  return crypto
    .createHash("md5")
    .update("misaka")
    .digest("hex")
}

const user ={ login: {} }

user.login = async ctx => {
	const { username, password } = ctx.request.body
	const user = await User
	.findOne({ username })
	.catch(err => ctx.throw(500, '服务器内部错误'))
	if (user) {
		if (md5Decode(password) === user.password) {
			let token = createToken(username)
			console.log(token)
			await user.save({token:token})
			.catch(err => ctx.throw(500, '服务器内部错误'))
			ctx.body = { code: 0, msg: '登录成功',username:username,token: token }
		} else{
			ctx.body = { code: 1, msg: '密码错误', user }
		}		
	}else{
		ctx.body = { code: 1, msg: '未注册', user }
	}	
}


module.exports = user