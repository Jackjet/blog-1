const router = require('koa-router')()

const Controls = require('../controls')

const checkToken = require('../token/checkToken.js');

router.prefix('/api')
router.post('/login', Controls.user.login)

router.get('/article', Controls.article.list)

router.get('/article/:id', Controls.article.item)

router.post('/add', checkToken,Controls.article.add)

router.post('/edit', checkToken,Controls.article.edit)

router.get('/qiniu', Controls.img.upImg)

router.delete('/article', checkToken,Controls.article.delete)

router.get('/tag', Controls.tag.list)

router.post('/tag', checkToken,Controls.tag.add)

router.delete('/tag', checkToken,Controls.tag.delete)

router.post('/friends', Controls.friends.add)

router.get('/friends', Controls.friends.list)

router.get('/allfriends', Controls.friends.all)

router.post('/examine', Controls.friends.examine)
module.exports = router
