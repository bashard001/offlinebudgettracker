const router = require("express").Router();
const Transaction = require("../models/transaction.js");

router.post("/api/transaction", ({body}, res) => {
  console.log(body);
  Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});



router.get("/api/transaction", (req, res) => {
  Transaction.find({})
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

module.exports = router;