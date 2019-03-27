const {obtenerPromedio, argv}=require('./datos.js')
var express = require('express');
var app = express();

console.log(argv);
if(argv._[0]=='promedio'){
	texto=('El promedio de '+ argv.n + ' es: '+obtenerPromedio(argv.m,argv.i,argv.p)) ;
}
else{
	console.log('promedio no calculado');
}


app.get('/', function (req, res) {
  res.send(texto);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

