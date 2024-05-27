import { Schema, model } from 'mongoose';

const requestSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    points: {type: Number, required: true},
    chosenAnswer: { type: Schema.Types.ObjectId, ref: 'Answer' }, // 채택된 답변
    answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }], // 답변 목록
});

export default model('Request', requestSchema);