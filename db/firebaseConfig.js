const admin = require("firebase-admin");

const serviceAccount = require("./lcbot-2022-firebase-adminsdk-x97re-845529b5d0.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://lcbot-2022-default-rtdb.asia-southeast1.firebasedatabase.app",
});

const db = admin.database();

module.exports = db;
