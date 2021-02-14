const router = require('express').Router();
const path = require('path');
const getDataFromFile = require('../utils/read-file');
const dataPath =path.join(__dirname, '..', 'utils', 'users.json');
const getAllUsers = (req, res) => (
  getDataFromFile(dataPath)
    .then((data) => {
      if (!data) {
        res.status(500).send({ message: 'Внутренняя ошибка сервера' });
        return;
      }
      res.status(200).send(data);
    })
);

const getUserById = (req, res) => (
  getDataFromFile(dataPath)
    .then((data) => {
      if (!data) {
        res.status(500).send({ message: 'Внутренняя ошибка сервера' });
        return;
      }
      const foundUser = data.find((user) => user._id === req.params.id);

      if (!foundUser) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
        return;
      }

      res.status(200).send(foundUser);
    })
);
router.get('/', getAllUsers);
router.get('/:_id', getUserById);
module.exports = router;