var  i=0;
var count = 0; 
var http = require('http');

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
let navegador = (nombre,id,cedula) =>{
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

http.createServer(function(request, response) {

  response.writeHead(200, {"Content-Type": "text/html"});
response.write('<h1 style="color:deepskyblue;text-shadow:2px 2px 1px black;text-align:center;">Datos del Estudiante e Informacion del Curso Tomado</h1>');
  response.write('<table style="position:absolute;left:490px;top:88px;" border=1 width=300><tr><td><b style="color:red;text-shadow:2px 1px 1px black;font-size:20px;">Estudiante:</b> </td>'+"<td><b>"+nombre+"</b></td></tr>");
  response.write('<br><tr><td><b style="color:red;text-shadow:2px 1px 1px black;font-size:20px;">Cedula:</b> </td>'+"<td><b>"+cedula+"</b></td></tr>");
  response.write('<br><tr><td colspan=2><b style="color:gold;text-shadow:1px 1px 1px black;font-size:20px;">Se ha matriculado en:</b> </td></tr>');
  response.write('<br><tr><td><b style="color:red;text-shadow:2px 1px 1px black;font-size:20px;">Curso:</b> </td>'+"<td><b>"+textoCurso.nombre+"</b></td></tr>");
  response.write('<br><tr><td><b style="color:red;text-shadow:2px 1px 1px black;font-size:20px;">Id:</b></td>'+"<td><b>"+textoCurso.id+"</b></td></tr>");
   response.write('<br><tr><td><b style="color:red;text-shadow:2px 1px 1px black;font-size:20px;">Duracion:</b> </td>'+"<td><b>"+textoCurso.duracion+"</b></td></tr>");
  response.write('<br><tr><td><b style="color:red;text-shadow:2px 1px 1px black;font-size:20px;">Valor:</b> </td>'+"<td><b>"+textoCurso.valor+"</b></td></tr></table>");
 
  response.end();
}).listen(8888);
  
       
            console.log('se han enviados los datos al navegador actualizalo');
        
        
    };
    
};
  
  const argv = require('yargs')
            .command ('inscribir','',opciones)
            .argv;

if(argv._[0]=='inscribir'){

    navegador(argv.nombre,argv.id,argv.cedula);
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




