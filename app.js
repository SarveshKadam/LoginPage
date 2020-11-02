const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const app = express()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const port = process.env.PORT || 3000

app.set('view engine','ejs')
app.use(express.static(__dirname+ '/public'))
app.use(helmet())

app.get('/',(req,res)=>{
    res.render('login')
})

app.post('/landing',urlencodedParser,(req,res)=>{
    const username = req.body.username
    res.render('landing',{username})
})

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})