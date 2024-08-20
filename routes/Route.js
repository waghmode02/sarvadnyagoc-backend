import express from "express";
import { addcontact,getAllContact,deleteContact} from "../controllers/contactController.js";
const route = express.Router();
route.post("/addcontact", addcontact); 
route.get("/getallcontact",getAllContact); 
route.delete("/delete/:id", deleteContact);
export default route