const express = require('express')
const cookieParser = require('cookie-parser')
const helmet = require('helmet')
const app = express()
const port = process.env.PORT || 3000

app.set('view engine','ejs')
app.use(express.static(__dirname+ '/public'))
app.use(express.urlencoded())
app.use(helmet())
app.use(cookieParser())


app.use((req,res,next)=>{
    if ( req.query.msg === 'fail') {
        res.locals.msg = "Sorry, this username and password combination does not exists"
    } else {
        res.locals.msg= ''
    }
   next()
})
app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/loginprocess',(req,res)=>{
    const username = req.body.username
    const password = req.body.password
    if(password === 'test'){
    res.cookie('username',username)
    res.redirect('/landing')
    }else{
        res.redirect('login?msg=fail')
    }
})

app.get('/landing',(req,res)=>{
    res.render('landing',{username : req.cookies.username})
})

app.get('/logout',(req,res)=>{
    res.clearCookie('username')
    res.redirect('login')
})

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})