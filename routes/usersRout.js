const router = require('express').Router();
const path = require('path');
const getDataFromFile = require('../utils/read-file');
const dataPath =path.join(__dirname, '..', 'data', 'users.json');
const getAllUsers = (req, res) => {
  getDataFromFile(dataPath)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: 'Нет пользователей' });
        return;
      }
      res.status(200).send(data);
    })
    .catch(()=>{ res.status(500).send({message:'Внутренняя ошибка сервера'})})
  };

const getUserById = (req, res) => {
  getDataFromFile(dataPath)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: 'Нет пользователей' });
        return;
      }
      const foundUser = data.find((user) => user._id === req.params._id);

      if (!foundUser) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
        return;
      }

      res.status(200).send(foundUser);
    })
    .catch(()=>{ res.status(500).send({message:'Внутренняя ошибка сервера'})})
  };
router.get('/', getAllUsers);
router.get('/:_id', getUserById);
module.exports = router;