import { Doctor, Nurse, Patient ,Appointment,Prescription} from "../models/adminModel.js";

// Add a new doctor
export const addDoctor = async (req, res) => {
    try {
        const { name, specialization, phone } = req.body;
        const doctor = new Doctor({ name, specialization, phone });
        await doctor.save();
        res.status(201).json({ message: "Doctor added successfully", doctor });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Add a new nurse
export const addNurse = async (req, res) => {
    try {
        const { name, phone } = req.body;
        const nurse = new Nurse({ name, phone });
        await nurse.save();
        res.status(201).json({ message: "Nurse added successfully", nurse });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Add a new patient
export const addPatient = async (req, res) => {
    try {
        const { name, age, phone } = req.body;
        const patient = new Patient({ name, age, phone });
        await patient.save();
        res.status(201).json({ message: "Patient added successfully", patient });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const bookAppointment = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      gender,
      city,
      speciality,
      doctor,
      date,
      slot,
      mode,
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !gender || !city || !speciality || !doctor || !date || !slot || !mode) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if appointment already exists for the same user and date
    const existingAppointment = await Appointment.findOne({ email, date, slot });
    if (existingAppointment) {
      return res.status(400).json({ message: "Appointment already exists for this user at the selected date and time slot." });
    }

    const newAppointment = new Appointment({
      firstName,
      lastName,
      email,
      phone,
      gender,
      city,
      speciality,
      doctor,
      date,
      slot,
      mode,
    });

    await newAppointment.save();
    res.status(201).json({ message: "Appointment booked successfully", newAppointment });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "User already exists with the provided email or phone number." });
    }
    res.status(500).json({ message: error.message });
  }
};

  
  // Get all appointments
  export const getAppointments = async (req, res) => {
    try {
      const appointments = await Appointment.find();
      res.status(200).json(appointments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get appointment by ID
  export const getAppointmentById = async (req, res) => {
    try {
      const appointment = await Appointment.findById(req.params.id);
      if (!appointment) {
        return res.status(404).json({ message: "Appointment not found" });
      }
      res.status(200).json(appointment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Delete an appointment
  export const deleteAppointment = async (req, res) => {
    try {
      const appointment = await Appointment.findByIdAndDelete(req.params.id);
      if (!appointment) {
        return res.status(404).json({ message: "Appointment not found" });
      }
      res.status(200).json({ message: "Appointment deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Create a new prescription
  export const createPrescription = async (req, res) => {
  try {
    const prescription = new Prescription(req.body);
    await prescription.save();
    res.status(201).json(prescription);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all prescriptions
export const getAllPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find();
    res.status(200).json(prescriptions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single prescription by ID
export const getPrescriptionById = async (req, res) => {
  try {
    const prescription = await Prescription.findById(req.params.id);
    if (!prescription) {
      return res.status(404).json({ error: "Prescription not found" });
    }
    res.status(200).json(prescription);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePrescription = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if prescription exists
    const prescription = await Prescription.findById(id);
    if (!prescription) {
      return res.status(404).json({ message: "Prescription not found" });
    }

    // Delete the prescription
    await Prescription.findByIdAndDelete(id);

    res.status(200).json({ message: "Prescription deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
export const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: "Error fetching doctors", error });
  }
};
export const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;

   
    const doctor = await Doctor.findByIdAndDelete(id);

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.status(200).json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }

};

