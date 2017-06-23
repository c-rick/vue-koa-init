const fs = require('fs')
const path = require('path')

module.exports = function (dir) {
  return (ctx, next) => {
    ctx.render = (template) => {
      ctx.type = 'text/html; charset=utf-8';
      ctx.body = fs.readFileSync(path.join(dir, template));
    }
    return next()
  }
}
