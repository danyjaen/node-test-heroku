const mongoose = require('mongoose');
const validator = require('validator');

const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    //Para relacionar dos modelos
    ref: 'User',
  },
});

module.exports = Task;