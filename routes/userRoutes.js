const { Router } = require('express');
const userController = require('../controller/userController');

const router = new Router();

router.delete('/', (req, res) => {
 res.status(404).json({ message: 'not implemented' });
});

router.get('/', (req, res) => {
  res.status(200).json({ message: 'not implemented' });
});

router.post('/', userController.createUser);

module.exports = router;
