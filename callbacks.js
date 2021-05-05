
const ejepmloMuro = {
    construido: false,
    aplanado: false,
    pintado: false
}

const tiempoDeEspera = 3000

function construir (muro, cb) {
    setTimeout(() => {
        muro.construido = true
        cb(false, muro)
    }, tiempoDeEspera)
}

function aplanar (muro, cb) {
    setTimeout(() => {
        muro.aplanado = true
        cb(false, muro)
    }, 1000)
}

function pintar (muro, cb) {
    setTimeout(() => {
        muro.pintado = true
        cb(false, muro)
    }, tiempoDeEspera)
    return muro
}

/* construir(ejepmloMuro, (error, muroConstruido) => {
    console.log('muroConstruido: ', muroConstruido)
}) */

construir (ejepmloMuro,(error, muroConstruido) => {
    if(error ){
        console.error('No se pudo construir')
        return
    }
    // se poner el return para q ahi se detenga la ejacuciion }
    //y el codigo q este aqui solo se ejecuta si se cumple el if
    console.log('muro construido: ', muroConstruido)
    aplanar(muroConstruido, (error, muroAplanado) => {
        if(error){
            console.error('No se pudo aplanar')
            return
        }
        console.log('muro aplanado: ', muroAplanado)
        pintar(muroAplanado, (error, muroPintado) => {
            if(error){
                console.error('No se pudo Pintar')
                return
            }
            console.log('muro pintado: ', muroPintado);
        })
    })
})

 