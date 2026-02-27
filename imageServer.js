const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

app.use("/uploads", express.static("uploads"));

// ==========================
// 📂 Multer Storage Config
// ==========================
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// ==========================
// 📤 Upload Route
// ==========================
app.post("/upload", upload.single("image"), (req, res) => {
  res.json({
    message: "Image uploaded successfully",
    imageUrl: `http://localhost:5000/uploads/${req.file.filename}`
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
