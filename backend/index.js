const express = require('express')
require("./db/config.js");
const User = require('./db/User.js');
const cors = require('cors')
const app = express()
const port = 3000


app.use(express.json());
app.use(cors());
app.post('/register', async(req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    res.status(500).json(result);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})