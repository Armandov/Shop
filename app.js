//serividor
const path = require ('path');
const express = require ('express');
const app = express();
const morgan = require ('morgan');
const mongoose = require('mongoose');
const host = 'localhost'; 

// db 
mongoose.connect('mongodb://127.0.0.1/node' )
.then(db => console.log('conectado mongoose Mongodatabase')) 
.catch(err => console.log(err));


// port ||
app.set('port',process.env.PORT || 3000);
// importar ./
const indexRoutes = require ('./routes/index');

//middle
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));


app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// rutas
app.use('/', indexRoutes);

app.listen(3000,()=>{
    
    console.log(`Servidor web iniciado en http://${host}:3000/`);

});



