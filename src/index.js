import app from "./app.js";
import colors from 'colors';

const port = 3000
const local = 'localhost'
const ip = '192.168.1.2'

app.listen(port, (err) => {
  if (err) throw err
  console.log(`Server running http://${local}:${port}`.bgBlue.black);
});