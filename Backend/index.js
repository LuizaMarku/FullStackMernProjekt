const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const path = require('path');

const itemRoute = require('./Routes/itemRoute');
const formRouter = require('./Routes/FormRoute');

const app = express();


app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
  exposedHeaders: ['set-cookie']
}));

app.use(session({
  secret: 'This will be secret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 }
}));


app.use(express.json({ limit: '1000mb', extended: true }));

app.use('/images', express.static(path.join(__dirname, 'images')));


app.use(formRouter);
app.use(itemRoute);


app.get('/', (req, res) => {
  res.send('hello node');
});


mongoose.connect(
  'mongodb+srv://markuluiza2:Shijak2023@cluster0.safdzz0.mongodb.net/markuluiza2?retryWrites=true&w=majority&appName=Cluster0'
)
.then(() => {
  console.log('databaze conected');
  app.listen(5000, () => console.log('server created'));
})
.catch(err => console.error(err));

