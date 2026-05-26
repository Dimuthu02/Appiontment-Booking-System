import mongoose from "mongoose";
import bycript from "bcryptjs";

const UserSchema = new mongoose.Schema({
  name: { type: String, require: true, trim: true },

  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  role: {
    type: String,
    enum: ["admin", "doctor", "patient", "receptionist"],
    default: "patient",
  },

  password: { type: String, require: true, unique: true, trim: true },
  phone: { type: Number },
  profileImage: { type: String },
  isActive: { type: Boolean, default: true },
});

//use to hash password
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bycript.genSalt(10);
  this.password = await bycript.hash(this.password, salt);
  next();
});

//Use to compare password
UserSchema.methods.matchPassword = async function (enterpassword) {
  return bycript.compare(enterpassword, this.password);
};

const user = mongoose.model("User", UserSchema);
export default user;
