const { multiplicar } = require('./helper/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');

multiplicar( argv.b, argv.l, argv.h )
.then ( archivo => console.log( archivo.rainbow, 'creado'))
.catch ( err => console.log( err ) );
