require(dotenv.config())
const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');

const UserSchema = new mongoose.Schema({
    // we are setting the schema for registering
    username: {type:String, unique:true,  required: true},
    email: {type:String, unique:true,  required: true},
    password: {type:String, required: true},
    role: {type: String, default: "user", },
    // here we want to to verify if user created account
}, {timestamps: true});

UserSchema.plugin(encrypt, {secret: process.env.JWT_SECRET, encryptedFields: ["password",]})


 const UserModel = mongoose.model('users', UserSchema);
 module.exports = UserModel;