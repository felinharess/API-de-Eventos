const pg = require("pg");

const database = new pg.Client("postgresql://postgres:**********.@db.xgbpvioncjuhvmimzeej.supabase.co:5432/postgres");

database.connect((erro) =>{
    if(erro){
        return console.log("Não foi possivel conectar com o banco de dados" , erro);
    }else{
        return console.log("Conectado ao Banco de dados");
    }

});

module.exports = database
