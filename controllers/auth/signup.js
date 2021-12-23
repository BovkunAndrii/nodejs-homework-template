const { Conflict } = require("http-errors");
const gravatar = require("gravatar");

const { User } = require("../../models");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Already registered");
  }
  const avatarURL = gravatar.url(email);
  const newUser = new User({ email, avatarURL });
  newUser.setPassword(password);
  await newUser.save();

  res.status(201).json({
    status: "success",
    code: 201,
    message: "Register success",
    data: {
      user: {
        email,
        avatarURL,
        // www.gravatar.com/avatar/5230e2e6054c5e4050e594108293acd7
      },
    },
  });
};

module.exports = signup;
