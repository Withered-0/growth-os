const express = require("express");

console.log("🔥 THIS IS THE ROUTER FILE BEING EXECUTED");

const router = express.Router();

router.get("/test", (req, res) => {
    res.json({
        success: true,
        message: "Router works!"
    });
});

router.post("/", (req, res) => {
    console.log("POST /api/audits reached");

    res.json({
        success: true,
        body: req.body
    });
});

module.exports = router;