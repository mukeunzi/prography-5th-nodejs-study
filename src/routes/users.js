const { Router } = require('express');
const UserController = require('../controllers/user-controller');

const router = Router();

router.get('', UserController.getUsers);
router.get('/:user', UserController.getUser);
router.post('', UserController.createUser);
router.put('/:user', UserController.updateUser);
router.delete('/:user', UserController.deleteUser);

module.exports = router;
