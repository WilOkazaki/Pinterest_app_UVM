import express from "express";

const router = express.Router();
router.get("/", (req, res) => {
  res.send("Good");
});
export default router;
