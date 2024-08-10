const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    wayOfContact: { type: String, required: true },
    countryCode: { type: String, required: true },
    contactDetail: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FormData", formDataSchema);
