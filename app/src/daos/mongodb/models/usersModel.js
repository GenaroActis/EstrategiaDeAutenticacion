import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    firstName: {type: String, required:true},
    lastName: {type: String, required:true},
    email: {type: String, required:true, unique: true},
    age: {type: Number, default: 0},
    password: {type:String, index:true},
    role: {type:String, default:'user'},
    isGithub: {type:Boolean, default: false},
    cartId: {type:String, require:true}
});

export const UserModel = mongoose.model(
    'users',
    UserSchema
);