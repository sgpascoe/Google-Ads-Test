const express = require('express');
const path = require('path');
const cors = require ('cors');
const app = express();

const corsOptions = {
  origin: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.static('public'));

app.get('/', function (req, res) {

  const index = (path.normalize(__dirname + '/public/index.html'));
  fs.readFile(index, 'utf8', (err, text) => {
     res.send(text);
   });
 });


app.listen(3000, () =>
  console.log('Listening on port 3000!'),
);