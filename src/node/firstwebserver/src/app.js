const path= require('path')
const express= require ('express')

console.log(__dirname)


const app=express()
//define paths for express config
const publicPath=path.join(__dirname, '../public')

//setup handlebars engine and views location
// app.set('view engine', 'hbs')

//setup static directory to serve
// app.use(express.static(publicPath))

app.get('',(req,res)=>{
    res.render('index',{
        name: 'shani'
    })
})
// app.get('', (req, res)=>{
// res.send('hello express')
// })

// app.get('/home', (req,res)=>{
//     res.send('<h1>homeee</h1>')
// })
app.get('/about', (req, res)=>{
res.send('about page')
})
app.get('/weather', (req, res)=>{
    res.send({
        forecase: 'it is snowing',
        location:'phili'
    })
    })
app.get('*', (req, res)=>{
    res.send('my 404 page')
})
//app.com
//app.com/home
//app.com/about
app.listen(3000,() =>{
console.log('server is up')
})

