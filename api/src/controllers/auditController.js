const express = require("express");

const router = express.Router();

router.get("/test", (req, res) => {
    res.json({
        success: true,
        message: "Router works!"
    });
});

router.post("/", (req, res) => {
    res.json({
        success: true,
        body: req.body
    });
});

module.exports = router;