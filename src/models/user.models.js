import mongoose from "mongoose";
import bcryptjs from "bcryptjs"
const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        mobile: { type: String, required: true },
        password: { type: String, required: true, minLength: 6, maxLength: 12 }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

//while creating and updating
userSchema.pre("save", function (next) {
    if (!this.isModified("password")) return next();
    let salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(this.password, salt);
    this.password = hashedPassword

    return next();
})

userSchema.methods.checkPassword = function (password) {
    const match = bcryptjs.compareSync(password, this.password);

    return match;
}

const User = mongoose.model('user', userSchema);

export {User};