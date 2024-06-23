import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    request: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Request'
    },
    date: {
      type: Date,
      default: Date.now
    }
  });

export default mongoose.model('Notification', notificationSchema);