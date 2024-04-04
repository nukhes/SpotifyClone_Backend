const express = require('express');
const router = express.Router();
const usersController = require('./controllers/usersController');
const usersMiddlewares = require('./middlewares/usersMiddleware');

router.get('/users', usersController.getUsers);
router.post('/users', usersMiddlewares.verifyAddUser, usersController.addUser);
router.delete('/users/:id', usersController.removeUser);
router.put('/uses/:id', usersController.updateUser);

module.exports = router;