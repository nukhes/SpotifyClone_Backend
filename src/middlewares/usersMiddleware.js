const { response } = require("express");

const verifyAddUser = (req, res, next) => {
  const { body } = req;

  const fieldVerify = (value) => {
    for (let letra of value) {
      if (letra == " ") {
        return true;
      }
    }
    return false;
  }

  for (let prop in body) {
    if (fieldVerify(body[prop])) {
      const errorRes = 'preencha o campo corretamente';
      return res.status(400).json({ message: errorRes });
    }
  }
  next();
}

module.exports = {
  verifyAddUser
}

// todo middlewares