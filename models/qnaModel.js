const firebase = require("../db/firebaseConfig");

const getQNA = (callback) => {
  firebase.ref(`qna`).once(
    "value",
    (snapshot) => {
      callback(snapshot.val());
    },
    (err) => {
      console.log("The read failed: ", err.name);
    }
  );
};

const addQNA = (question, answer, callback) => {
  firebase.ref(`qna`).push().set({
    answer,
    question,
  });

  callback("Add question success");
};

module.exports = { getQNA, addQNA };
