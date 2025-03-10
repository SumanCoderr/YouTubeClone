import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});

// Use `mongoose.models.Users` to avoid overwriting the model if it already exists.
const User = mongoose.models.Users || mongoose.model('Users', userSchema);

// export the model
export default User;
