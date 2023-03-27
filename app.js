const express = require("express")
const app = express()
const port = 3000

app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// ejs
// views/index.ejs
// views/about.ejs
app.set('views','./views')
app.set('view engine','ejs')
app.get('',(req,res)=>{
    res.render('index',{text:'This is EJS'})
})
app.get('/about', (req, res) => {
    res.render('about', { text: 'About Page' })
})


// no ejs
// views/index.html
// views/about.html
// app.get('',(req,res)=>{
//     res.sendFile(__dirname+'/views/index.html')
// })




app.listen(
    port,
    () => console.info(`Listening on port ${port}`)
)