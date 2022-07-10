const express = require('express')
const session = require('express-session');
const {MongoClient} = require("mongodb")
const MongoStore = require('connect-mongo');
const bodyParser = require('body-parser')

const { initializeApp } = require("firebase-admin/app");
const { getAuth } = require('firebase-admin/auth');
require('dotenv').config()

const firebase = initializeApp()
let id =
    "eyJhbGciOiJSUzI1NiIsImtpZCI6IjUwYTdhYTlkNzg5MmI1MmE4YzgxMzkwMzIzYzVjMjJlMTkwMzI1ZDgiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQW1hbiBLdW1hciIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHZ1F4a29yVVgxUVVkRnA4c1FLRUdvNU9CcWV2c1BDcEhvV2E1c2U9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXRtYXlvZ2FzaGFsYS0zNDg1YyIsImF1ZCI6ImF0bWF5b2dhc2hhbGEtMzQ4NWMiLCJhdXRoX3RpbWUiOjE2NTczNzA0MDgsInVzZXJfaWQiOiIzcEVma01INTBZVENsY3JGM3ZOVnk3STFJN3MxIiwic3ViIjoiM3BFZmtNSDUwWVRDbGNyRjN2TlZ5N0kxSTdzMSIsImlhdCI6MTY1NzM3MDQwOCwiZXhwIjoxNjU3Mzc0MDA4LCJlbWFpbCI6ImFtYW5rdW1hci5zcGo0MTBAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMDQxNDU2MjI4MDk4OTY5MDAyNTIiXSwiZW1haWwiOlsiYW1hbmt1bWFyLnNwajQxMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.psRnc_YtI2EYgJwUasxinsb4QE772tL-GTO9SCGwjrdZz9FtcR1gYPxbWarcanOFTeJOdZAj5RrDhRz0QOrLbvU6LkQrSryY_pRkAYCTK4xRkdUy5wUURsgyLZqc2bNyWaJuyBvITW01G70VhWvFDjrgj4xHoCct9-O3Vyb1wJr8sl_7B0jzpo7q68dmu_GjFpU0MnQ_9j2xs6mX_RlLFanokOClsF2HR9bBSM1w3pcy4rrqj3m-S8xotp8d83SCo8a3UFpLbTBPwLUfy_i5vD5vseySdtXqHX_O19zp7QFNg_s674CruP0fg7PcsGGuoSx42OLPyLHC8qiew3Gxsg"

getAuth(firebase).verifyIdToken(id).then(r => console.log(r))
// getAuth(firebase).verifyIdToken(id).then(r=> console.log(r))
// creating of express app
const app = express()
// Connect to db then init Session store
const db = new MongoClient("mongodb://127.0.0.1:27017")
let dbo, collectionList = []
db.connect().then((client) => {
    dbo = client.db('atmaYogaShala')
    require('./modules/routes')(app, dbo)
    dbo.listCollections().toArray(function (err, collInfos) {
        if (err) throw err
        collInfos.forEach(e => {
            collectionList.push(e.name)
        })
        console.log(collectionList)
        if (!collectionList.includes('ADs')) dbo.createCollection('ADs')
    })
})
app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        sameSite: true,
        path: "/",
        store: MongoStore.create({
            mongoUrl: "mongodb://127.0.0.1:27017",
            dbName: "atmaYogaShala",
            ttl: 14 * 24 * 60 * 60, // 14 Days
            touchAfter: 600, // writes to db every 10 minutes
            crypto: {
                secret: process.env.SESSION_KEY,
            },
        }),
        saveUninitialized: false, // don't create session until something stored
        resave: false, //don't save session if unmodified
    })
)

// use body parser to decode query params and json body.
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(express.json())

app.get('/', function (req, res) {
    console.log(req.session)
    if (req.session) {
        req.session.count++
    } else {
        req.session['count'] = 1
    }
    res.send('sdfsd' + req.session.count)
})

const port = process.env.PORT || 6969   // Unique port not to conflict...
// server listening
app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});
