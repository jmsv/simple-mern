const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const routeTasks = require('./src/routes/tasks');

app.use(cors())

app.use(bodyParser.json());

app.use('/api/tasks', routeTasks, (req, res) => res.sendStatus(401));

app.get('*', (req, res) => {
  res.send('hello world');
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`listening on ${port}`);
