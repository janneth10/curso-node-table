const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'es la base de la tabla a generar'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'lista la tabla en consola'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Número límite de escritura de la tabla'
                })                
                .check((argv, options)=>{
                    console.log('yargs', argv);
                    if(isNaN(argv.b)){
                        throw 'La base ingresada no es numerica';
                    }
                    return true;
                })
                .argv;

console.clear();

// imprimir los argumentos que vienen por consola comando ejemplo: node app --base=5
// console.log(process.argv);
// console.log(argv);
console.log('base: yargs', argv.b, 'listar: yargs', argv.l, 'hasta: yargs', argv.h);
// desestructurar arreglo y poner valor por defecto si no se recibe el arg3s que será 5
// const [,,arg3 = 'base=5'] = process.argv;
// const [,base = 5] = arg3.split('=');
// console.log(base)
module.exports = {
    argv
}