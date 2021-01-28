const { User, Account } = require('../models');
const {
  BusinessErrorCode,
  ResponseError,
  ResponseSuccess,
} = require('../lib/response');

const get = async (req, res) => {
  const { id } = req.query;
  let user = await User.findOne({ where: { id } });
  if (!user) {
    return res.json(new ResponseError(BusinessErrorCode.USER_ID_INVALID));
  }

  return res.json(new ResponseSuccess({
    result: user
  }));
}

const update = async (req, res) => {
  const { id, nickname, image, sign } = req.body;
  const user = await User.findOne({ where: { id } });

  if (!user) {
    return res.json(new ResponseError(BusinessErrorCode.USER_ID_INVALID));
  }

  if (nickname) {
    user.nickname = nickname;
  }

  if (image) {
    user.image = image;
  }

  if (sign) {
    user.sign = sign;
  }

  await user.save();

  return res.json(new ResponseSuccess({
    result: user
  }));
}


const destroy = async (req, res) => {
  const { id } = req.body;
  let user = await User.findOne({ where: { id } });
  if (!user) {
    return res.json(new ResponseError(BusinessErrorCode.USER_ID_INVALID));
  }

  await User.destroy({ where: { id } });

  return res.json(new ResponseSuccess({
    result: user
  }));
}

module.exports = {
  get,
  update,
  destroy
}