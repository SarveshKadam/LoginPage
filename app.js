const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.set('view engine','ejs')
app.use(express.static(__dirname+ '/public'))

app.get('/',(req,res)=>{
    res.render('login')
})

app.post('/landing',(req,res)=>{
    res.render('landing')
})

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})