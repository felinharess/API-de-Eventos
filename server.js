const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const eventosRoutes = require("./routes/eventos")
const app = express();
app.use(bodyParser.json());

app.use('/eventos', eventosRoutes)

app.listen(port, ()=>{
    console.log(`O servidor esta rodando na porta ${port}`)
})  