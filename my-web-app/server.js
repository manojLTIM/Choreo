const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // Extract numbers from query parameters
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // Perform addition
    const result = num1 + num2;

    // Send the result as response
    res.send(`Result: ${result}`);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
