
// Las promesasson objetos

// Constructor
// Resolve = funcion --- Pasa la promesa de pendiente a resuelto
// Reject = funsion ---- Pasa la promesa de pendiente a rechazado
const promesa = new Promise((resolve, reject)=>{
    const todoCool = true
    if(todoCool){
        resolve('ok')
    }else{
        reject('not ok :c')
    }
})

// Los objetos promesa tienen 2 metodos:
// - then-- se ejecuta cuando la promesa se ejecuta correctamente
//  recibe lo que le pasamos a la funcion resolve
// - catch-- se ejecuta cuando la promessa se rechaza
//  recibe lo que le pasamos a la funcion reject
promesa
    .then((resultado) => {console.log(resultado);}) // 'ok'
    .catch((error) => {console.error(error)})  // 'not ok :c'
