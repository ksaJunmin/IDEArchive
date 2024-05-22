import { Schema, model } from 'mongoose';

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  like: {
    type: Number,
    default: 0
  }
});

export default model('Post', PostSchema);