import express from "express";
import { 
  addcontact, 
  getAllContact, 
  deleteContact 
} from "../controllers/contactController.js";

import { 
  addDoctor, 
  addNurse, 
  addPatient, 
  bookAppointment, 
  getAppointments, 
  getAppointmentById, 
  deleteAppointment, 
  createPrescription, 
  getAllPrescriptions, 
  deletePrescription,
  getDoctors,
  deleteDoctor
 
} from "../controllers/adminController.js";

const route = express.Router();

// Contact Routes
route.post("/addcontact", addcontact);
route.get("/getallcontact", getAllContact);
route.delete("/delete/:id", deleteContact); // Fixed typo here

// Doctor, Nurse, and Patient Routes
route.post("/doctors", addDoctor);
route.post("/nurses", addNurse);
route.post("/patients", addPatient);
route.get("/getadoctors",getDoctors);
route.delete("/doctord/:id",deleteDoctor);

// Appointment Routes
route.post("/book", bookAppointment);
route.get("/appointments", getAppointments);  // Changed "/" to "/appointments" for clarity
route.get("/appointments/:id", getAppointmentById);
route.delete("/appointments/:id", deleteAppointment);

// Prescription Routes
route.post("/prescription", createPrescription);
route.get("/prescriptions", getAllPrescriptions);
route.delete("/prescriptions/:id",deletePrescription)
export default route;
