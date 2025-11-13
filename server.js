const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const Event = mongoose.model('Event', new mongoose.Schema({
  title: String,
  date: String,
  location: String
}));

app.get('/events', async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

app.post('/events', async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.json(event);
});

app.listen(5000, () => console.log('Server running on port 5000'));