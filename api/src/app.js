const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const auditRoutes = require("./routes/audit");

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

// Log every request
app.use((req, res, next) => {
    console.log(`➡️ ${req.method} ${req.originalUrl}`);
    next();
});

// Home route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Growth OS API is running 🚀"
    });
});

// Audit routes
app.use("/api/audits", auditRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

module.exports = app;