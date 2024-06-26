import { Schema, model } from 'mongoose';

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content1: {
    type: String,
    required: true
  },
  content2: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  like: {
    type: Number,
    default: 0
  },
  likedBy: [{
    type: Schema.Types.ObjectId, ref: 'User'
  }],
  category: {
    type: String,
    default: '기타'
  },
  author: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
  islatex:{
    type: Number,
    default: 0
  },
  fileId: {
    type: Schema.Types.ObjectId,
    ref: 'uploads.files'
  },
  originalname: {
    type: String
  },
  filename: {
    type: String
  }
});

export default model('Post', PostSchema);