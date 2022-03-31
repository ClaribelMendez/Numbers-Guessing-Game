const express = require('express');
const cors = require('cors');
require('dotenv').config()
const db = require('../server/db/db-connection.js'); 

const app = express();

const PORT = 4002;
app.use(cors());
app.use(express.json());

//creates an endpoint for the route /api
app.get('/', (req, res) => {
    res.json({ message: 'Hello from My ExpressJS' });
});

//create the get request
app.get('/api/players', cors(), async (req, res) => {
    // const STUDENTS = [

    //     { id: 1, firstName: 'Lisa', lastName: 'Lee' },
    //     { id: 2, firstName: 'Eileen', lastName: 'Long' },
    //     { id: 3, firstName: 'Fariba', lastName: 'Dako' },
    //     { id: 4, firstName: 'Cristina', lastName: 'Rodriguez' },
    //     { id: 5, firstName: 'Andrea', lastName: 'Trejo' },
    // ];
    // res.json(STUDENTS);
    try{
        const { rows: players } = await db.query('SELECT * FROM players');
        res.send(players);
    } catch (e){
        return res.status(400).json({e});
    }
});

//create the POST request
app.post('/api/players', cors(), async (req, res) => {
    const newPlayer = { firstname: req.body.firstname, lastname: req.body.lastname, username: req.body.username  }
    console.log([newPlayer.firstname, newPlayer.lastname, newPlayer.username]);
    const result = await db.query(
        'INSERT INTO players(firstname, lastname, username) VALUES($1, $2, $3) RETURNING *',
        [newPlayer.firstname, newPlayer.lastname, newPlayer.username]
    );
    console.log(result.rows[0]);
    res.json(result.rows[0]);
});

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});