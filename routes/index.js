const express = require ('express');
const router = express.Router();
const Producto = require('../models/producto');

router.get('/', async (req,res) => {
   const Productos = await Producto.find();
res.render('index' , {
    Productos
});
});

router.post ('/add', async (req,res) => {
    const producto = new Producto (req.body);
    await producto.save();

res.redirect('/');

});

router.get ('/detalles/:id', async (req,res) => {
    const { id } = req.params;
    const producto = await Producto.findById(id);
    producto.status = !Producto.status;
    await producto.save();
    res.redirect('/');

});

router.get ('/editar/:id', async (req,res) => {
    const { id } = req.params;
    const producto = await Productos.findById(id);
    res.render('edit');
});

router.post ('/editar/:id', async (req,res) => {
    const { id } = req.params;
    await Productos.update({_id:id},req.body);
    res.redirect('/');

});


router.get('/borrar/:id', async (req,res) => {
const { id } = req.params;
await Productos.remove({_id: id});
   res.redirect('/');
});  

module.exports = router;




