// asignando varialbes
const selectColor = document.querySelector('#color')
const selectMin = document.querySelector('#precioMinimo')
const selectMax = document.querySelector('#precioMaximo')
const selectOrdenar = document.querySelector('#ordenar')
const contenedor = document.querySelector('#contenedor')
const imagen = document.querySelector('#imagen')



document.addEventListener('DOMContentLoaded', function(e){


    selectColor.addEventListener('change',function(e){
        datosBusqueda.color = e.target.value
        filtrarRopas();
    });

    selectMin.addEventListener('change', function(e){
        datosBusqueda.precioMin = parseFloat(e.target.value)     
        filtrarRopas();
    })
    
    selectMax.addEventListener('change', function(e){
        datosBusqueda.precioMax = parseFloat(e.target.value)
        filtrarRopas();

    })
    

    


})

//funciones

function limpiarHTML() {
        
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild)
    }
}




Ropas.forEach(Ropas => generarHTMl(Ropas))

function generarHTMl(Ropas){

    console.log('ejecutando')
    const cab = document.createElement('div')
    cab.classList = 'mt-2 col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12' 
    cab.innerHTML = `
    <div class="card">
              <img src="${Ropas.url}" class="card-img-top" alt="Camisa Azul">
              <div class="card-body">
                  <h5 class="card-title"${Ropas.nombre} talla ${Ropas.talla}</h5>
                  <p class="card-text">${Ropas.tipo} cómodo y elegante para cualquier ocasión.</p>
                  <p class="card-text"><strong>Precio: ${Ropas.precio}</strong></p>
                  <div class="d-grid gap-2">
                      <button class="btn btn-primary" type="button">Comprar</button>
                  </div>                 
              </div>
          </div>
    `

    contenedor.appendChild(cab)
}

const datosBusqueda = {
    nombre: "",
    precio: '',
    color: '',
    talla: "",
    tipo: "",
    url: "",
    minOrMax: '',
}

function filtrarRopas(){
    const resultado = Ropas.filter(filtrarColor).filter(filtrarMin).filter(filtrarMax)

    console.log(resultado)

    if (resultado == ''){
        limpiarHTML();
        vacioHTML();
    }

    else {
        limpiarHTML();
        resultado.forEach(resultado => generarHTMl(resultado))
    }



}

function filtrarColor(Ropas){
    if (datosBusqueda.color) {
        return Ropas.color === datosBusqueda.color;
    }
    else {return Ropas}
}

function filtrarMin(Ropas){
    if (datosBusqueda.precioMin) {
        return Ropas.precio >= datosBusqueda.precioMin;       
    }
    else {return Ropas}
}

function filtrarMax(Ropas){
    if (datosBusqueda.precioMax) {
        return Ropas.precio <= datosBusqueda.precioMax;
    }
    else {return Ropas}
}



function vacioHTML () {
    const div = document.createElement('div')
    div.classList = 'alert alert-danger mt-5';
    div.role = 'alert'
    div.textContent = 'No hay ningun resultado'
    contenedor.appendChild(div);

}


function comprobar1 (a,b){
    return a - b
}

function comprobar2 (a,b){
    return b - a
}
