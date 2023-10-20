import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email Already Exists'],
    require: [true, 'Email is Required'],
  },
  username: {
    type: String,
    require: [true, 'Username is Required'],
    match: [/^(?=.{3,20}$)/, "Username invalid, it should contain 8-20  letters and be unique!"]
  },
  image: {
    type: String,
  }
});

const User = models.User || model("User", UserSchema);

export default User;