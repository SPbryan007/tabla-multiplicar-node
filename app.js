const argv = require('./config/yargs').argv;//para importar la libreria de argv de yargs

const colors = require('colors/safe');

const { crearArchivo,listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {

  case 'listar':
      listarTabla(argv.base,argv.limite);
  break;

  case 'crear':
  crearArchivo(argv.base,argv.limite)
          .then(archivo => console.log(`Archivo creado:`,colors.yellow(archivo))) //.then(archivo => console.log(`Archivo creado: ${archivo.green}`))
          .catch(e => console.log(e));
  break;

  default:
      console.log('comando no reconocido');
}


//-------------------------------------------------------------------------------
//console.log('Limite',argv.limite);
//let base = "5";
//console.log(process.argv);
// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

//multiplicar.crearArchiv
