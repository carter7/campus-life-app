const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Schema
const Event = mongoose.model("Event", new mongoose.Schema({
  title: String,
  date: String,
  location: String
}));

// Routes
app.get('/events', async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

app.post('/events', async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.json(event);
});

// Listen on PORT variable or default to 5000
const PORT = process.env.PORT || 5001;

app.listen(5001, () => console.log(`Server running on port ${5001}`));
