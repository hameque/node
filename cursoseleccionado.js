var  i=0;
var count = 0; 
//Opciones para el yargs
const opciones ={
    nombre:{
        demand: true,
        alias:'nom'
    },
    id:{
        demand: true
    },
    cedula:{
        demand: true,
        alias:'ced'
    }
};
//Informacion de los cursos a mostrar
let cursos = [

{
		nombre: 'Matematicas',
		id: '001',
		duracion: '3 meses',
		valor: 300000
	},
{
	nombre: 'Scratch',
	id: '002',
	duracion: '2 meses',
	valor: 200000	
	},
{
		nombre: 'NodeJs',
		id: '003',
		duracion: '4 meses',
		valor: 500000
	},
{
	nombre: 'Fisica',
	id: '004',
	duracion: '1 meses',
	valor: 250000	
	},
{
	nombre: 'Informatica',
	id: '005',
	duracion: '3 meses',
	valor: 280000	
	}
	];


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

 //creacion del archivo
const fs= require('fs');
let crearArchivo = (nombre,id,cedula) =>{
    let textoCurso = cursos.find(curso => curso.id == id);
    if (textoCurso == undefined) {
        console.log("Ha ingresado un id invalido")
    } else {
        datos = 'Estudiante: ' + nombre +'\r\nCedula #: '+cedula+
                '.\r\nSe ha matriculado en: '+ 
                '\r\nCurso: ' +textoCurso.nombre+
                '\r\nId: '+textoCurso.id+
                '\r\nDuracion: '+textoCurso.duracion+  
                '\r\nValor de: '+textoCurso.valor+' pesos'

        fs.writeFile('matriculado.txt',datos,(err)=>{
            if(err) throw (err);
            console.log('se ha creado el archivo');
        });
        
    };
    
};
  
  const argv = require('yargs')
            .command ('inscribir','',opciones)
            .argv;

if(argv._[0]=='inscribir'){

    crearArchivo(argv.nombre,argv.id,argv.cedula);
}else{

    console.log("Id","  Nombre","   Duración","Valor")

var intervalObject = setInterval(function () { 
        count=count+1; 
            
 {
	console.log(cursos[i].id,cursos[i].nombre,cursos[i].duracion,cursos[i].valor);
		} 
        if (count == cursos.length) { 
            console.log('Proceso terminado'); 
            clearInterval(intervalObject); 
        } 
i=i+1;
    }, 2000); 

}


module.exports={
    cursos,
    opciones,
    crearArchivo,
};	
