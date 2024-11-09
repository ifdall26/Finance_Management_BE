// routes/transactions.js
const express = require("express");
const router = express.Router();
const { Transaction, User, Category } = require("../models");
const authenticateJWT = require("../middleware/authenticateJWT");

// Get all transactions for a user
router.get("/", authenticateJWT, async (req, res) => {
  const transactions = await Transaction.findAll({
    where: { user_id: req.user.id },
    include: [User, Category],
  });
  res.json(transactions);
});

// Create a new transaction
router.post("/", authenticateJWT, async (req, res) => {
  const { category_id, amount, date, description } = req.body;

  try {
    const transaction = await Transaction.create({
      user_id: req.user.id,
      category_id,
      amount,
      date,
      description,
    });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
