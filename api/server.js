require("dotenv").config();

const app = require("./src/app");
require("./src/config/db");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("==================================");
    console.log("🚀 Growth OS API Started");
    console.log(`🌐 Server: http://localhost:${PORT}`);
    console.log("==================================");
});