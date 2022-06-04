const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const methodOverride = require('method-override')
const routes = require('./routes')
const exphbs = require('express-handlebars')

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(routes)
app.use(methodOverride('_method'))
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})