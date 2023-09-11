const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT;
const open_ai_api_key = process.env.OPEN_AI_API_KEY;

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', () => {
  console.log('success');
});

app.post('/completions', async (req, res) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${open_ai_api_key}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: 'Create a SQL request to' + req.body.message,
        },
      ],
    }),
  };
  try {
    const response = await fetch(
      'https://api.openai.com/v1/chat/completions',
      options
    );
    const data = await response.json();
    console.log(data);
    res.send(data.choices[0].message);
  } catch (err) {
    console.error(err);
  }
});

app.listen(port, () => {
  `Server listening on port ${port}!`;
});
