// index.js
require("dotenv").config();
const express = require("express");
const { sequelize } = require("./models");
const userRoutes = require("./routes/users");
const transactionRoutes = require("./routes/transactions");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Import routes (nanti kita akan buat file routes untuk setiap fitur)
// app.use('/api/users', require('./routes/users'));
// app.use('/api/transactions', require('./routes/transactions'));

// Use routes
app.use("/api/users", userRoutes);
app.use("/api/transactions", transactionRoutes);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected!");
    return sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log("Error: " + err));
