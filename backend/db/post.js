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
  category: {
    type: String,
    required: true
  },
  like: {
    type: Number,
    default: 0
  },
  likedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],

  category: {
    type: String,
    default: '기타'
  }
});

export default model('Post', PostSchema);