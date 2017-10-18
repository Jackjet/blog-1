const qn = require('qn')

const client = qn.create({
	accessKey: 'G--fSksAdYnUi5vPICBaKgOmfFh1Qy5xjMbPHwqn',
	secretKey: 'VYa_Uon5VGnxjq3MAfJk97uObtiPQrbOgBSfa3HQ',
	bucket: 'images',
	origin: 'http://images.u.qiniudn.com',
  // timeout: 3600000, // default rpc timeout: one hour, optional 
  // if your app outside of China, please set `uploadURL` to `http://up.qiniug.com/` 
  // uploadURL: 'http://up.qiniu.com/', 
})

const img = { unImg:{} }

img.upImg = async (ctx, next) => {
	ctx.body = {code: 0, msg:"七牛Token获取成功", upToken:client.uploadToken()}
}

module.exports = img