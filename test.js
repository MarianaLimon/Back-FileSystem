
const fs = require('fs')

fs.writeFile('created.txt','Hola desde node fs', 'utf8', (error) => {
    console.log('Se escribio el archivo');
})

fs.writeFile('read.js','//Este es un readFile', 'utf8', (error) => {
    console.log('Se escribio el archivo read');
})

fs.writeFile('append.js','//Este es un appendFile', 'utf8', (error) => {
    console.log('Se escribio el archivo append');
})

fs.writeFile('unlink.js','//Este es un unlink', 'utf8', (error) => {
    console.log('Se escribio el archivo unlink');
})

fs.writeFile('copy.js','//Este es un copyFile', 'utf8', (error) => {
    console.log('Se escribio el archivo copy');
})

// por cada funcion deberiamos tener un script ejecutable
// readFile
// appendFile
// unlink
// copyFile
