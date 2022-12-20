/* Importando dependencias */
import express from 'express'

/* Instanciar constantes */
const app = express();

/* funcionalidades del servidor */
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/datos', (req, res) => {
    res.render('nivel', req.query);
})

