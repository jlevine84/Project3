import axios from "axios";

export default {
  
  getAll: function() {
    return axios.get("/api/entry/view");
  },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves a book to the database
  createEntry: function(Entry) {
    console.log("hitting API")
    return axios.post("api/entry/create", Entry);
  }
};
