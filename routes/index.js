var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "We gonna land a job!",
    user: "Dev",
    added: new Date(),
  },
  {
    text: "Yes, we will!",
    user: "user",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Message board", messages: messages });
  console.log("The index data:", req.body);
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "Message board" });
});

router.post("/new", function (req, res) {
  const formData = req.body;
  console.log("the form data:", formData);
  messages.push({text: formData.messageText, user: formData.authorName, added: new Date()});
  res.redirect("/");
  // res.redirect("message", {
  //   title: "New message",
  //   formData: formData,
  //   added: new Date(),
  // });
});

module.exports = router;
