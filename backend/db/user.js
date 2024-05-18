import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  id: String,
  data: String,
});
export default mongoose.model('User', userSchema);