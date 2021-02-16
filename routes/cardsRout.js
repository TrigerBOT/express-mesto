const router = require('express').Router();
const path = require('path');
const getDataFromFile = require('../utils/read-file');
const dataPath =path.join(__dirname, '..', 'data', 'cards.json');
const getAllCards = (req, res) => {
  getDataFromFile(dataPath)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: 'Карточки не найдены' });
        return;
      }
      res.status(200).send(data);
    })
    .catch(()=>{ res.status(500).send({message:'Внутренняя ошибка сервера'})})
  };
router.get('/', getAllCards);
module.exports = router;