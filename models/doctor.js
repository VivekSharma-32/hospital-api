const mongoose = require("mongoose");
const doctor = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name is required"],
    },
    email: {
      type: String,
      require: [true, "Email is required"],
    },
    password: {
      type: String,
      require: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

const Doctor = new mongoose.model("Doctor", doctor);
module.exports = Doctor;
