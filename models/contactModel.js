import mongoose from "mongoose";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?[1-9]\d{1,14}$/;

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator: function(value) {
        return emailRegex.test(value);
      },
      message: 'Please enter a valid email address.'
    }
  },
  mobile: {
    type: String,
    required: [true, 'Mobile number is required'],
    validate: {
      validator: function(value) {
        return phoneRegex.test(value);
      },
      message: 'Please enter a valid phone number.'
    }
  },
  message: {
    type: String,
    required: [true, 'Message is required']
  },
  acceptTnC: {
    type: Boolean,
    required: [true, 'You must accept the terms and conditions']
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
