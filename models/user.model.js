import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Name is required'],
    trim: true,
    minLength: 3,
    maxLength: 20
    },
    email: {type: String, required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },

    password: {type: String, required: [true, 'Password is required'],
    minLength: 6,},
}, {timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;