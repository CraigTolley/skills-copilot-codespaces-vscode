// Create web server
const express = require('express');
const app = express();

// Create a new comment
app.post('/comments', (req, res) => {
    res.send('You are trying to create a new comment.');
});

// Get all comments
app.get('/comments', (req, res) => {
    res.send('You are trying to get all comments.');
});

// Get a comment by id
app.get('/comments/:id', (req, res) => {
    res.send('You are trying to get a comment with id: ' + req.params.id);
});

// Update a comment by id
app.put('/comments/:id', (req, res) => {
    res.send('You are trying to update a comment with id: ' + req.params.id);
});

// Delete a comment by id
app.delete('/comments/:id', (req, res) => {
    res.send('You are trying to delete a comment with id: ' + req.params.id);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/comments');
});
