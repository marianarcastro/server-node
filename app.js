const express = require('express')
const app = express()
const path = require('path')
var http = require('http')
const port = 3000

app.use(express.static('public'))
app.use(express.static(__dirname + 'public/css'))
app.use(express.static(__dirname + 'public/js'))
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('index')
})


app.listen(port, () => console.info('Listening on port ${port}'))