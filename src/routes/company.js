const express = require("express");
const router = express.Router();

const {
  create,
  listByUser,
  listActiveByUser,
  update
} = require("../controllers/company");
const { requireSignin, isAuth } = require("../controllers/auth");

router.post("/company", create);
router.get("/company/:userId", listByUser);
router.get("/company-active/:userId", listActiveByUser);
router.put("/company/:id/:status", update);

module.exports = router;
