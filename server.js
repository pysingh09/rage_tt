const express = require('express');
const app = express();
const path = require('path');

// Serve static files from Vue app build directory
app.use(express.static(path.join(__dirname, 'cef/dist')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

