
//Este es un appendFile

fs.appendFile('creado.txt', 'data-append', (err) => {
    if (err) throw err;
    console.log('No sirve!');
});
