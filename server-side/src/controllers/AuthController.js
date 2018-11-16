const jwt = require('jsonwebtoken');
const { User } = require('../models');
const config = require('../config/config');

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK,
  });
}

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      const userJson = user.toJSON();
      res.send({
        user: userJson,
        token: jwtSignUser(userJson),
      });
    } catch (err) {
      res.status(400).send({
        error: 'The email account is already in use...',
      });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (!user) {
        res.status(403).send({
          error: 'The login information was incorrect',
        });
      }
      const isPasswordValid = await user.comparePassword(password); // bug here
      if (!isPasswordValid) {
        res.status(403).send({
          error: 'The login information was incorrect',
        });
      }
      const userJson = user.toJSON();
      res.send({
        user: userJson,
        token: jwtSignUser(userJson),
      });
    } catch (err) {
      res.status(500).send({
        error: 'An error has occur when trying to log in',
      });
    }
  },
  async forgotpassword(req , res){
    function hashPassword(user, options) {
      const SALT_FACTOR = 244;
      if (!user.changed('password')) return;
      return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(user.password, salt, null))
        .then((hash) => {
          user.setDataValue('password', hash);
        });
    }
    try {
      const { email,password,phonenumber } = req.body;
      if(phonenumber){
        const user = await User.findOne({
          attributes: ['email','phonenumber'],
          where:{
            email,
            phonenumber
          },
        });
        if(user){
          res.send(user);
        }

        if(!user){
          res.status(403).send({
            error: "The email or phone number does not exists"
          });
        }
      }
      else{
          return User.findOne({
            where:{
              email: email,
            }
          }).then(function(result){
            return result.update({"password": password}).then(function(){
              res.send({updated: true});
            });
          });
          //await User.create(user);
          
      }
    } catch (error) {
      res.status(500).send({
      });
    }
  },
};
