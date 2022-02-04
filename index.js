const express = require('express');
const bodyParser = require('body-parser');
const errorMiddleware = require('./middlewares/errorMiddleware');
const userRoutes = require('./routes/userRoutes');
const loginRoutes = require('./routes/loginRoutes');

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.listen(3000, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRoutes);

app.use('/login', loginRoutes);

app.use(errorMiddleware);
