const express = require("express");
const router = express.Router();

// Routes here
router.get("/api", (req, res) => {
    res.send("hi")
})

module.exports = router;