const express = require('express');
const app = express();

const PORT = 3000

const data = [
    {
        id: 1,
        name: 'Alice',
        age: 10
    },
    {
        id: 2,
        name: 'Bob',
        age: 11
    }
]

app.get('/', (req, res) => {
    const currentTime = new Date();
    console.log("the index page has been visited");
    res.send(`[${currentTime}] Welcome to my app. Please use the /api endpoint to interact with users`)
});

app.get('/api/users', (req, res) => {
    const currentTime = new Date();
    console.log(`[${currentTime}] the api/users endpoint has been visited`);
    res.send(data);
});

app.get('/api/users/:id', (req, res) => {
    const currentTime = new Date();
    const requestedId = req.params.id;
    console.log(`[${currentTime}] the api/users/${requestedId} endpoint has been visited`);

    const user = data.find(user => user.id === Number(requestedId));

    if (user) {
        return res.status(404).send('User not found');
    };

    res.send(user);
});

app.listen(PORT, () => { console.log(`Listening on http://localhost:${PORT}`) });