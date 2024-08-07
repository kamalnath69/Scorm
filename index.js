const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());

// Serve static files from the scormcontent directory
app.use(express.static(path.join(__dirname, 'scormcontent')));

app.get('*', (req, res) => {
  console.log(req.path);
  res.sendFile(path.join(__dirname, 'scormcontent', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
