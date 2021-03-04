const express = require("express");
const { PORT = 3000 } = process.env;
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
const usersRout = require("./routes/usersRout");
const cardsRout = require("./routes/cardsRout");
mongoose.connect("mongodb://localhost:27017/mestodb", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
app.use((req, res, next) => {
  req.user = {
    _id: "6040e4c7b695e67b59a68ce6", // вставьте сюда _id созданного в предыдущем пункте пользователя
  };

  next();
});
app.use(express.static(path.join(__dirname, "public"))); // теперь клиент имеет доступ только к публичным файлам
app.use("/users", usersRout);
app.use("/cards", cardsRout);
app.use("*", (req, res) => {
  res.status(404).send({ message: "Запрашиваемый ресурс не найден" });
});
app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`App listening on port ${PORT}`);
});
