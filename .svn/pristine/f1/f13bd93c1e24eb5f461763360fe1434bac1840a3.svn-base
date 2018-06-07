const jsonServer = require('json-server')
const server = jsonServer.create()

// Support middleware
const middleware = jsonServer.defaults()
server.use(middleware)

// 支持加载多个db json文件
const _ = require('underscore')
const path = require('path')
const fs = require('fs')
const mockDir = path.join(__dirname, 'data')
const base = {}
const files = fs.readdirSync(mockDir)
files.forEach(function (file) {
  _.extend(base, require(path.resolve(mockDir, file)))
})
const router = jsonServer.router(base)
server.use(router)

// 返回自定义格式数据
router.render = (req, res) => {
  console.log(res.locals.data)
  res.jsonp({
    data: res.locals.data,
    status: 0,
    msg: ''
  })
}

server.listen(9090, () => {
  console.log('JSON Server is running')
})

作者：老邢Thierry
链接：https://www.jianshu.com/p/7094c477207d
來源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。