const User = require('../model/User');

exports.signup = async (req, res) => {
  // res.json(req.body);
  console.log(req.body);
  const { email, username, password } = req.body;

  let user;
  try {
    user = await new User({ email, username, password }).save();
  } catch (e) {
    console.log(e);
  }
  res.json(user);
};
