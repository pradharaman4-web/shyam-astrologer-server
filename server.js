
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Shyam Astrologer API",
    status: "Server is running"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    service: "Shyam Astrologer",
    status: "online"
  });
});

app.post("/api/kundli", (req, res) => {
  const { name, date, time, place } = req.body;

  if (!date || !time || !place) {
    return res.status(400).json({
      success: false,
      message: "Date, time and place are required"
    });
  }

  res.json({
    success: true,
    message: "Birth details received successfully",
    birthDetails: {
      name: name || "Guest",
      date,
      time,
      place
    },
    calculationStatus: "Pending astrology engine integration"
  });
});

app.listen(PORT, () => {
  console.log(`Shyam Astrologer server running on port ${PORT}`);
});
