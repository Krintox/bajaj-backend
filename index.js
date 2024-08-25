const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    const numbers = [];
    const alphabets = [];
    let highestLowerCase = null;

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (typeof item === 'string') {
            alphabets.push(item);
            if (item === item.toLowerCase() && (!highestLowerCase || item > highestLowerCase)) {
                highestLowerCase = item;
            }
        }
    });

    const response = {
        is_success: true,
        user_id: "shashank_suggala_05062003",
        email: "shashanktsx@gmail.com",
        roll_number: "9205579193",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowerCase ? [highestLowerCase] : []
    };
    res.status(200).json(response);
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
