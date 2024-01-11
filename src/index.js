import app from "./app.js";
import colors from 'colors';

const port = 4000
const local = 'localhost'
const ip = '0.0.0.0'

app.listen(port, (err) => {
  if (err) throw err
  console.log(`Server running http://${local}:${port}`.bgBlue.black);
});