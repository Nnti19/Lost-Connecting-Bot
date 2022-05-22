const { getQNA, addQNA } = require("../models/qnaModel");
module.exports = {
  name: "qna",
  description: "ini merupakan command qna",
  execute(msg, args, client) {
    let section = msg.content.split(" | ");
    if (args[1]) {
      if (args[1] === "answer") {
        //*qna answer | question
        getQNA((data) => {
          let answer = "";
          Object.keys(data).map((key) => {
            if (data[key].question === section[1]) {
              answer = data[key].answer;
            }
          });

          if (answer) {
            msg.reply(`${answer}`);
          } else {
            msg.reply("I can't find answer for your question");
          }
        });
      } else if (args[1] === "add") {
        //* !qna add | dribble | lostconnecting
        addQNA(section[1], section[2], (message) => {
          msg.reply(message);
        });
      }
    } else {
      msg.reply("Please insert second arguments");
    }
  },
};
