// importamos modulo proopio de node file system que nos permite manejar archivos
const fs = require('fs');
const multiplicar =  async ( number, listar, hasta )=> {
    try{
        if(listar){
            console.log( '======================='.green);
            console.log( `      Tabla del ${ number }      `.rainbow);
            console.log( '======================='.green); 
        }
    
        let result, consola = '';
        for(let i = 1; i <= hasta; i++){
            consola += `${ number } ${'x'.green} ${ i } ${'='.green} ${ number * i }\n`;
            result += `${ number } x ${ i } = ${ number * i }\n`;
        }
    
        if(listar) console.log( consola );
        
        fs.writeFileSync(`./salida/tabla-${ number }.txt`, result);

        return `archivo tabla-${ number }.txt`;
    }catch( err ){
        throw err
    }
};

module.exports = {
    multiplicar
}