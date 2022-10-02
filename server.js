// DEPENDENCIES
const express = require('express');
const path = require('path');

// creating an "express" server
const app = express();

// Sets up the Express app to serve static files and handle data parsing
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());






































// //require all dependencies
// const express = require('express')

// const PORT = 3001;
// const app = express();


// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// //direct user to correct page depending on url
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));
// });

// app.get("/notes", (req, res) => {
//     res.sendFile(path.join(__dirname, "./public/notes.html"))
//  });

// //send json of all notes if user accesses /api/notes
// app.get('/api/notes', (req, res) => {
//     fs.readFile(path.join(__dirname, './db/db.json'), "utf8", (error,notes) => {
//         if (error) {
//             return console.log(error)
//         }
//         res.json(JSON.parse(notes))
//     });
//   });

//   app.psot("/api/notes", (req, res) => {

//   })