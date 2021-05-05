
//Este es un copyFile

fs.copyFile('creado.txt', 'creado2.txt',(err) => {
    if (err) throw err;
    console.log('copiado');
})
