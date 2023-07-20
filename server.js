import express from 'express';
import dotenv from 'dotenv'

const app = express();

dotenv.config()
app.get('/', (req, res) => {
  res.send('Welcome!');
});
console.log(process.env.PORT);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening on port ${port}...`));