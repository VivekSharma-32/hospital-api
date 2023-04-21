const mongoose = require("mongoose");
const patient = new mongoose.Schema(
  {
    phone: {
      type: String,
      require: [true, "Phone is required"],
    },
    name: {
      type: String,
      require: [true, "Name is required"],
    },
    email: {
      type: String,
      require: [true, "Email is required"],
    },
    address: {
      type: String,
      require: [true, "Address is required"],
    },
  },
  { timestamps: true }
);
const Patient = mongoose.model("Patient", patient);
module.exports = Patient;
