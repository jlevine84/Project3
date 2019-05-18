import axios from "axios";
export default {
  // Get all Entries
  getAll: function() {
    return axios.get("/api/entry/view");
  },
  // Get Entries for a specific range
  getRange: function(startDate, endDate) {
    return axios.get(`/api/entry/?startDate=${startDate}&endDate=${endDate}`)
  },
  // Saves an Entry to the database
  createEntry: function(Entry) {
    return axios.post("api/entry/create", Entry);
  },
  // Get an Entry for a specific date
  getByDate: function(date) {
    return axios.get("api/entry/" + date)
  },

  // Scrape function
  scrape: function() {
  return axios.get(`/scrape/`)
  },

  // Get all Doctors
  getDoctors: function() {
    console.log("Hitting getDoctors API")
    return axios.get("api/doctor/view")
  },

  // Add a Doctor
  addDoctor: function() {
    console.log("Hitting addDoctor API")
    return axios.post("api/doctor/create")
  },

  // Get all Medications
  getMedications: function() {
    console.log("Hitting getMedications API")
    return axios.get("api/medication/view")
  },

  // Add a Medication
  addMedication: function() {
    console.log("Hitting addMedications")
    return axios.post("api/medication/create")
  }
};
