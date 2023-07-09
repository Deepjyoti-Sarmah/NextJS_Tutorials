import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type:  String,
        required : [true, "Please provide a username"],
        unique: true,
    },
    email: {
        type: String,
        required : [true, "Please provide a email"],
        unique: true,
    },
    password: {
        trype: String,
        required: [true, "Please provide a password"],
    },
    
})

const User = mongoose.models.users || mongoose.model("user", userSchema);

export default User;