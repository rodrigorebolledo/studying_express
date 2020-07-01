const express = require('express');
const app = express();
const morgan = require('morgan');
const routes = require('./routes');
const api = require('./api.js');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(routes);
app.use('/api', api);

app.get('*', (req, res) => {
    res.end('Pagina no existe')
});
app.listen(3000, () => {
    console.log('Server its working')
});