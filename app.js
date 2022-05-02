const express = require('express');
const port = process.env.PORT || 4000;
const app = express();
const date = require(__dirname + '/date.js');
const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'))



app.get('/', (req,res)=>{   
 
    
    res.render('index', {listTitle: date, newListItem: items});
})

app.post('/', (req,res)=>{
    const item = req.body.newItem;
    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect('/work')
    }else{

        items.push(item)
        res.redirect('/');
    } 
})


app.get('/work', (req,res)=>{
    res.render('index', {listTitle: "Work List", newListItem: workItems });
})


app.get('/about', (req,res)=>{
    res.render('about.ejs')
})

// app.post('/work', (req,res)=>{
//     let item = req.body.newItem;
//     workItems.push(item);
//     res.redirect('/work')
// })

app.listen(port,()=>{
    console.log(`This port is located on ${port} welcome aboard and enjoy`)
})