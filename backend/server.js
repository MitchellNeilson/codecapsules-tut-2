require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const membersRoutes = require('./routes/members')
const cors = require('cors');

// Firebase: Admin SDK and config 
// const serviceAccount = require('./codecap-severlessmean-firebase-adminsdk-t6qwr-9bdae8c1d4.json');
// const admin = require('firebase-admin');

// Initialize Firebase
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// });
// Get a reference to the Firestore database
// const db = admin.firestore();

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/members',membersRoutes)

app.use(express.urlencoded({extended: true}))

app.listen(process.env.PORT, () => {
    console.log(`connected to DB and listening on port ${process.env.PORT}`)
})