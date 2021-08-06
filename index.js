const express = require('express')
var exphbs  = require('express-handlebars');

const app = express()
const path = require('path')
const port = 3000

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname,'static')))

app.use('/', require(path.join(__dirname, 'routes/blog.js')))
       


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
