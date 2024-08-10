const FormData = require("../models/FormData");

const submitForm = async (req, res) => {
  try {
    const {
      name,
      email,
      wayOfContact,
      countryCode,
      contactDetail,
      subject,
      message,
    } = req.body;

    const newFormData = new FormData({
      name,
      email,
      wayOfContact,
      countryCode,
      contactDetail,
      subject,
      message,
    });

    await newFormData.save();
    res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error, please try again later" });
  }
};

module.exports = { submitForm };
