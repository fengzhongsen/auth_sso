const { User, Account } = require('../models');
const { createToken } = require('../lib/token');
const {
  BusinessErrorCode,
  ResponseError,
  ResponseSuccess,
} = require('../lib/response');

const register = async (req, res) => {
  const { email, password } = req.body;
  let account = await Account.findOne({ where: { email } });
  if (account) {
    return res.json(new ResponseError(BusinessErrorCode.USER_ALREADY_EXISTS));
  }

  const user = await User.create({});
  const access_token = createToken(user.id);
  account = await Account.create({ email, password, access_token, userId: user.id });

  return res.json(new ResponseSuccess({
    result: {
      access_token
    }
  }));
}

const login = async (req, res) => {
  const { email, password } = req.body;
  const account = await Account.findOne({ where: { email, password } });

  if (!account) {
    return res.json(new ResponseError(BusinessErrorCode.USERNAME_OR_PASSWORD_ERROR));
  }

  const user = await account.getUser();
  return res.json(new ResponseSuccess({
    result: user
  }));
}

const changePwd = async (req, res) => {
  const { email, password, new_password } = req.body;
  const account = await Account.findOne({ where: { email, password } });

  if (!account) {
    return res.json(new ResponseError(BusinessErrorCode.USERNAME_OR_PASSWORD_ERROR));
  }

  account.password = new_password;
  await account.save();

  return res.json(new ResponseSuccess({
    result: true
  }))
}

module.exports = {
  register,
  login,
  changePwd,
}