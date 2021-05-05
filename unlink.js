
//Este es un unlink

fs.unlink('creado.txt', (err) => {
    if (err) throw err
    console.log(`Se borro creado.txt`);
})
