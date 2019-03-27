const opciones={
	nombre:{
		alias:'n',
		demand:true
	},
	matematicas:{
		demand:true,
		alias:'m'
	},
	ingles:{
		demand:true,
		alias:'i'
	},
	programacion:{
		demand:true,
		alias:'p'
	}

}

let obtenerPromedio=(nota_uno,nota_dos,nota_tres)=>prom=((nota_uno+nota_dos+nota_tres)/3);

const argv= require('yargs')
	.command('promedio', 'Calcular el promedio', opciones)
	.argv

module.exports = {
	obtenerPromedio,
	argv
};
