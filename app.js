const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogroutes')


//connect to mongodb
const dbURI = 'mongodb+srv://escanor:Hulk1234.@nodetuts.pe2ff.mongodb.net/node_tuts?retryWrites=true&w=majority';

mongoose.connect(dbURI,{useNewUrlParser:true, useUnifiedTopology:true})
        .then((result) => app.listen(3000))
        .catch((err) => console.log(err));


//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

//listen for requests


//middleware and static files
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));

app.use(morgan('dev'));


app.get('/',(req,res) =>{
    res.redirect('/blogs');
});

app.get('/about',(req,res) =>{
    //res.send("<p>About Page</p>");
    res.render('blogs/about',{title:'About'});
});

//blog routes
app.use('/blogs',blogRoutes);

//404 page
app.use((req,res) =>{
    res.status(404).render('404',{title:"Page not found"})
})