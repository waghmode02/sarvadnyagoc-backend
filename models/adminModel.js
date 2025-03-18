import mongoose from "mongoose";

// Doctor Schema
const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);
const Doctor = mongoose.model("Doctor", doctorSchema);

// Nurse Schema
const nurseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);
const Nurse = mongoose.model("Nurse", nurseSchema);

// Patient Schema
const patientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    phone: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);
const Patient = mongoose.model("Patient", patientSchema);

// Appointment Schema
const appointmentSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
    city: { type: String, required: true },
    speciality: { type: String, required: true },
    doctor: { type: String, required: true},
    date: { type: Date, required: true },
    slot: { type: String, required: true, enum: ["Morning", "Afternoon"] },
    mode: { type: String, required: true, enum: ["Online", "Offline"] },
  },
  { timestamps: true }
);
const Appointment = mongoose.model("Appointment", appointmentSchema);

// Prescription Schema
const prescriptionSchema = new mongoose.Schema(
  {
    patientName: { type: String, required: true },
    doctorName: { type: String, required: true },
    date: { type: Date, required: true },
    medications: [
      {
        name: { type: String, required: true },
        dosage: { type: String, required: true },
        frequency: { type: String, required: true },
      },
    ],
    notes: { type: String },
  },
  { timestamps: true }
);
const Prescription = mongoose.model("Prescription", prescriptionSchema);

export { Doctor, Nurse, Patient, Appointment, Prescription };
