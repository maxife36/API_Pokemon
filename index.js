const express = require("express");
const server = express();

const { sequelize } = require("./src/models/index");
const { fillPokemons, fillTypes} = require("./src/DB_Controller/index");
const routes = require("./src/Routes/index")
const PORT = 3002

server.use(express.json({ limit: "50mb" }));

server.use("/", routes)


//----------- ENDS POINT ----------------

sequelize.sync({force:true}).then(async()=>{

    await fillTypes()
    await fillPokemons(1,100)

    console.log("SE SINCRONIZO CORRECTAMENTE A LA BASE DE DATOS");
    
    server.listen(PORT, ()=>{
        console.log(`SE CONECTO CORRECTAMENTE AL PUERTO ${PORT}`);
    })

}).catch((err)=>{
    console.log(err.message);
})

