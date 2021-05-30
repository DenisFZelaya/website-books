var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ventas'
})

connection.connect(
    (err)=>{
        if(!err){
            console.log("Conexion establecida");
        }else{
            console.log("Conexion fallida");
        }
    }
)

/*
connection.query("SELECT * FROM tblproductos", function(err, resultado){
    console.log(resultado);
})

connection.end()
*/

module.exports = connection;