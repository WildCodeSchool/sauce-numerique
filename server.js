const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./api/connection');

const app = express();

const PartnersRoutes = require('./api/routes/partners');

app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

app.use(bodyParser.json());
app.use('/partners', PartnersRoutes);

app.get('/', (req, res) => {
  connection.query('SELECT * FROM partenaire', (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Erreur lors de la récupeération des données');
    } else {
      res.json(results);
    }
  });
});
const port = 5000;

app.listen(port, () => console.log(`Serveur up and running on port ${port}!`));
