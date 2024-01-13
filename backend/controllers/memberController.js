// const member = require('../models/Member')

// Firebase: Admin SDK and config 
const serviceAccount = require('../codecap-severlessmean-firebase-adminsdk-t6qwr-9bdae8c1d4.json');
const admin = require('firebase-admin');
// Initialize Firebase
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
// Get a reference to the Firestore database
const db = admin.firestore();

// GET all items
const getItems = async (req,res) => {
    try {
        
        const membersRef = db.collection("members");
        const response = await membersRef.get();
        let responseArr = [];
        response.forEach(doc => {
            responseArr.push(doc.data());
        });
        return res.send(responseArr);

    } catch (error) {
        res.send(error)
    }
    
}

module.exports = {
    getItems
}