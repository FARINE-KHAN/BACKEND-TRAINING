const express = require("express")
const router = express.Router();
const controller = require("../controllers/newUserController")

router.post('/createUser',controller.createUser)
router.post('/loginUser',controller.loginUser)

module.exports = router;