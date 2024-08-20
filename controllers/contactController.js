// controllers/contactController.js

import Contact from "../models/contactModel.js";

export const addcontact = async (req, res) => {
  const { name, email, mobile, message, acceptTnC } = req.body;

  try {
    // Create a new contact
    const contact = new Contact({
      name,
      email,
      mobile,
      message,
      acceptTnC,
    });

    // Save the contact
    await contact.save();
    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(400).json({ error: error.message });
  }
};

export const getAllContact = async (req, res) => {
  try {
    const userData = await Contact.find();
    if (!userData) {
      return res.status(404).json({ msg: "user data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await Contact.findById(id);
    if (!userExist) {
      return res.status(404).json({ msg: "user not Exist" });
    }
    await Contact.findByIdAndDelete(id); // Corrected from User.findByIdAndDelete(id)
    res.status(200).json({ msg: "user deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};