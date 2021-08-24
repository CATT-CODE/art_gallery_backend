var express = require("express");
var router = express.Router();

const { signup, login, favorite, listFavorites } = require("./controller/userController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/favorites", listFavorites);

router.post("/sign-up", signup);

router.post("/login", login);

router.put("/exhibit", favorite);

module.exports = router;
