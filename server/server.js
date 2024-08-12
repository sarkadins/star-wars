import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './models/User.js';
import Character from './models/Character.js'

const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/user', (req, res) => {
  const user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
});

app.patch('/api/character/:id', async (req, res) => {
  const characterId = req.params.id;
  const characterUpdate = req.body;

 const result = await Character.findByIdAndUpdate(
    characterId,
    characterUpdate
  )

  res.json(result)
})

mongoose.connect('mongodb://127.0.0.1:27017/starwars')
  .then(() => {
    app.listen(3000, () => console.log('http://localhost:3000'))
  })
  .catch((err) => console.log(err))