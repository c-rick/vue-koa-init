const codes = require('../config/code')

module.exports = function () {
  return (ctx, next) => {
    ctx.api = (response = {}) => {
      ctx.status = 200
      ctx.body = {}
      const code = response.code || 0
      ctx.body = {
        code,
        msg: response.msg || codes[code],
        data: response.data || {}
      }
    }
    return next()
  }
}
