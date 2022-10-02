//require all dependencies
const express = require('express')


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//direct user to correct page depending on url
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
 });

//send json of all notes if user accesses /api/notes
app.get('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, './db/db.json'), "utf8", (error,notes) => {
        if (error) {
            return console.log(error)
        }
        res.json(JSON.parse(notes))
    });
  });