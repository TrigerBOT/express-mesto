const express = require('express');
const { PORT = 3000 } = process.env;
const path = require('path');
const app = express();
const usersRout=require('./routes/usersRout');
const cardsRout=require('./routes/cardsRout');
app.use(express.static(path.join(__dirname, 'public'))); // теперь клиент имеет доступ только к публичным файлам
app.use('/users', usersRout);
app.use('/cards',cardsRout);
app.use('*', (req, res) => {
  res
    .status(404)
    .send({ message: 'Запрашиваемый ресурс не найден' });
});
app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`App listening on port ${PORT}`);

})