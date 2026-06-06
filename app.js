const express = require ('express');
const app   = express();

app.get('/',(req, res) =>{
    res.send('estado de pedido:EN CAMINO');
});

app.listen(300, ()=>{
    console.log('Servidor activo en puerto 300');
})