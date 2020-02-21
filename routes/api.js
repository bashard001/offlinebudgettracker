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
router.post("/api/transaction/remove", ({body}, res) =>{
  console.log(body)
  Transaction.deleteOne({ name: `${body.name}` }, function (err, results, fields) {
    if(err) res.sendStatus(404);
    console.log(results, fields);
    res.sendStatus(200);
  });
})

module.exports = router;