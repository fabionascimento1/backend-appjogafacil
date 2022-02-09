const express = require("express");
const router = express.Router();

const {
  create,
  listByUser,
  listActiveByUser,
  update
} = require("../controllers/sportscourt");
const { requireSignin, isAuth } = require("../controllers/auth");

router.post("/sportscourt", create);
router.get("/sportscourt/:userId", listByUser);
router.get("/sportscourt-active/:userId", listActiveByUser);
router.put("/sportscourt/:id/:status", update);

module.exports = router;
