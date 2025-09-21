const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  fname: {
    type: String,
    required: true,
    minLength: 3,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
});

// UserSchema.pre("save", function (next) {
//   this.updatedAt = Date.now();
//   next();
// });

const User = mongoose.model("User", UserSchema);

module.exports = User;