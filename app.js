const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
// creating of express app
const app = express()

// use body parser to decode query params and json body.
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(express.json())

const port = process.env.PORT || 6969   // Unique port not to conflict...
// server listening
app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});
