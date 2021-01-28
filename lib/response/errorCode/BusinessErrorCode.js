const BusinessErrorCode = {
  'USER_ALREADY_EXISTS': {
    code: 10001,
    message: '用户名已存在',
  },
  'USERNAME_OR_PASSWORD_ERROR': {
    code: 10002,
    message: '用户名或密码错误',
  },
  'ACCESS_TOKEN_INVALID': {
    code: 10003,
    message: 'access_token无效',
  },
  'USER_INFO_UNINITIALIZED': {
    code: 10004,
    message: '未初始化用户信息',
  },
  'USER_ID_INVALID': {
    code: 10006,
    message: 'UserId无效',
  },
  'OLD_PASSWORD_ERROR': {
    code: 10006,
    message: '旧密码错误',
  },
}

module.exports = BusinessErrorCode;