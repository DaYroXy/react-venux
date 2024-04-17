const express = require("express");
const router = express.Router();

// Routes here
router.get("/", (req, res) => {
    res.send("hi")
})

router.get("/api/users", (req, res) => {
    const data = [
        { username: "Anas", password: "123" },
        { username: "karim", password: "123" },
        { username: "fb5i", password: "123" },
        { username: "2ere", password: "123" },
    ]

    res.json(data)
})

module.exports = router;