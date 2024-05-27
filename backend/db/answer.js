import { Schema, model } from 'mongoose';

const answerSchema = new Schema({
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    request: {type: Schema.Types.ObjectId, ref: 'Request'}
});

export default model('Answer', answerSchema);