const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./connection");
const app = express();

const PartnersRoutes = require("./routes/partners");

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());
app.use("/partners", PartnersRoutes);

app.get('/', (req, res) => {
    connection.query('SELECT * FROM partenaire', (err, results) => {
        if (err)
        {
            console.log(err)
            res.status(500).send('Erreur lors de la récupeération des données')
        }
        else
        {
            res.json(results);
        }
    });
})

app.post('/', (req, res) => {
    const formData = req.body;
    connection.query('INSERT INTO partenaire SET ?', formData, ( err, results) => {
        if (err)
        {
            console.log(err)
            res.status(500).send("Erreur lors de la sauvegarde du user")
        }
        else 
        {
            res.sendStatus(200);
        }
    })
})
const port = 5000;

app.listen(port, () => console.log(`Serveur up and running on port ${port}!`));