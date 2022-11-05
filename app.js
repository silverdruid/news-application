const express = require('express')
const path = require('path')
const port = 5000
const app = express()
const bodyParser = require('body-parser');
const moment = require('moment')
app.locals.moment = moment;

// static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/css', express.static(__dirname + 'public/img'))
app.use('/css', express.static(__dirname + 'public/js'))
 
// template engines
app.set('views', path.join(__dirname, './src/views'))
app.set('view engine', 'ejs')
app.engine('news', require('ejs').renderFile)

//Routes
const newsRouter = require('./src/routes/news'); 
const { urlencoded } = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', newsRouter)

app.listen(5000, () => {
    console.log(`listening on port ${port}`);
})

