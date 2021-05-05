
//Este es un readFile

fs.readFile('creado.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
});
