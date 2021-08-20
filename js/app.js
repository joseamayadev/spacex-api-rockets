// Creando la muestra de los diferentes datos 
let contenedorCardsData = document.querySelector(".contenedorItems");
var categorie = document.querySelector('#categoria');



// Evento principal que escucha el clic en el boton de buscar
search.addEventListener('click', function(e) {
    let select = categorie.value;
    let string = txtSearch.value;
    busqueda()
        .then(data => { return data.json() })
        .then(res => {
            // console.log(res);
            contenedorCardsData.innerHTML = "";
            if (select == "capsules") {
                res.forEach(element => {
                    busquedaCapsules(element, string);
                })
            } else if (select == "history") {
                res.forEach(element => {
                    buscarHistory(element, string);
                })
            }

        });


});



// Funciona asincrona usada para esperar la respuesta desde la API en base a la categoría seleccionada 
async function busqueda() {
    var categorie = document.querySelector('#categoria').value;
    var spacexApi = await fetch(`https://api.spacexdata.com/v4/${categorie}`);
    return spacexApi;
}



// Funcion que se ejecuta en base al if/else dentro del listener del boton para poder renderizar correctamente los resultados
function busquedaCapsules(element, string) {
    if (element.serial.match(string)) {
        contenedorCardsData.innerHTML += `
                            <div class="contenedorCardsItems">
                                <h4>${element.serial}</h4>
                                <div class="contenedorStatus">
                                    <span class="blue">${element.type}</span>
                                    <span class="yellow">${element.status}</span>
                                </div>

                                <div class="contenedorTextos">
                                    <p class="descripcion">${element.last_update}</p>
                                    <p class="fechaLanzamiento">Fecha de Lanzamiento</p>
                                    <p class="fechaLanzamientoContent">${element.original_launch}</p>
                                </div>
                            </div>
                            `;
    } else {

    }

}


function buscarHistory(element, string) {
    if (element.title.match(string)) {
        contenedorCardsData.innerHTML += `
                            <div class="contenedorCardsItems alto-300">
                                <h4>${element.title}</h4>
                                <div class="contenedorStatus">
                                    <span class="blue">Links</span>
                                    <span class="yellow">No info</span>
                                </div>

                                <div class="contenedorTextos">
                                    <p class="descripcion">${element.details}</p>
                                    <p class="fechaLanzamiento">Fecha de Lanzamiento</p>
                                    <p class="fechaLanzamientoContent">${element.event_date_utc}</p>
                                </div>
                            </div>
                            `;

    } else {

    }

}



// fetch('https://spacexdata.com/api/launches/latest')