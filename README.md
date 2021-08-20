#  Vista para extraer datos de cohetes desde SpaceX API 🍋
![](https://res.cloudinary.com/www-ismyt-com/image/upload/v1628822848/IMAGENES/GITHUB/header-jordan-animation_c1is5k.svg)
<br>

Hablemos rápidamente sobre como hacer renderizado desde el cliente con Literal Strings (ES6). <br>
No necesitas manipular un Shadow Dom, o crear custom elements, ni tampoco templates con todas tus funcionalidades porque puedes implementar o inyectar código Javascript directamente desde el cliente y pasarlo como parte del contenido HTML de un elemento contenedor con el famoso innerHTML.
<br>

* **El famoso innerHTML:**
```
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

        // Pasar código para mostrar advertencia de que no existen resultados

    }
}
```

<br>

Siendo este un desarrollo que me tomó mas o menos 15 min crearlo, tiene muchas cosas que mejorar por lo que puedes agrear tus propias mejoras, puedes agregar filtros, de hecho el botón del filtro esta listado en la UI solo debes agregarle funcionalidad y practicar ya que el código para pasar peticiones fetch lo tienes acá: 

<br>

```
async function busqueda() {
    var categorie = document.querySelector('#categoria').value;
    var spacexApi = await fetch(`https://api.spacexdata.com/v4/${categorie}`);
    return spacexApi;
}
```
Tres lineas de código que te permiten obtener la respuesta y poder manejarla como promesa para poder hacer con ella lo que quieras.

<br>

### **Veamos como se ve el diseño final 🍋**
<br>

![](https://res.cloudinary.com/www-ismyt-com/image/upload/v1629415140/IMAGENES/GITHUB/SPACEX-API/space-x-api-dashboard_cyuf4a.png)

Los elementos amarrillos tienen una pequeña animación de loading, abajo verás el código.
<br>
<br>

### 🍋 Solo se basa en un par de parametros que pasas a través de Fetch
<br>
Como siempre, trato de dejar el código de la forma mas entendible posible para que puedas reutilizar los estilos en cualquiera de tus frameworks favoritos, finalmente cuando envias la petición a través de fetch puedes manejar directamente esa respuesta, gracias a que el endpoint de SpaceX API te genera el resultado en base al query que estas haciendo y sin usar ní una sola clase. 
<br>
<br>

![](https://res.cloudinary.com/www-ismyt-com/image/upload/v1629415264/IMAGENES/GITHUB/SPACEX-API/space-x-api-results_gpufaf.png)

## ¿Conocimiento importantes para el desarrollo?

* fetch API
```
:root {
    --main-bg-color: #0E0E0E;
    --secondary-bg-color: #161616;
    --blue-color: #4E54FF;
    --yellow-color: #F4E236;
    --bg-cards: rgba(255, 255, 255, 0.103);
}
}
```

* CSS ( Grid / Flex / Keyframes )
```
header {
    height: 200px;
    width: 100%;
    display: grid;
    grid-template-columns: 20% 30% 20% 15% 15%;
    grid-template-rows: 100px;
}

```

* CSS / Animación previa a la búsqueda 

```
.loading::before {
    content: "";
    width: 40px;
    height: 100%;
    background: linear-gradient(96.4deg, rgba(255, 255, 255, 0) 4.54%, rgba(255, 255, 255, 0.265283) 57.15%, rgba(255, 255, 255, 0) 94.26%);
    position: absolute;
    opacity: .4;
    animation: move 1s infinite;
}

//el keyframe
@keyframes move {
    0% {
        transform: translateX(0px) rotate(0deg);
    }
    50% {
        transform: translateX(200px) rotate(20deg);
    }
    100% {
        transform: translateX(0px) rotate(0deg);
    }
}

```

* CSS / Estilización de la lista

```
.listaSeleccion {
    display: flex;
    justify-content: center;
    align-items: center;
}

.listaSeleccion select {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    background-color: transparent;
    border: none;
    outline: none;
    font-family: Montserrat;
    font-weight: 500;
    color: var(--main-yellow);
}

.listaSeleccion select * {
    background-color: var(--main-blue);
    border: none;
    box-shadow: none;
}

.listaSeleccion select>option {
    background-color: var(--main-blue);
    border: none;
    box-shadow: none;
    color: var(--main-yellow);
}


```


* Javascript / Manejador de eventos principal

```

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

```

* CSS / Microinteraction para el filtro
```

.contenedorFilter span {
    width: 25px;
    height: 2px;
    margin: 3px;
    background-color: var(--main-blue);
    transition: .4s;
    cursor: pointer;
}

.contenedorFilter:hover span {
    width: 35px;
}

.contenedorFilter:hover span:nth-child(2) {
    width: 10px;
}

.contenedorFilter span:nth-child(2) {
    width: 15px;
    height: 2px;
    margin: 3px;
    background-color: var(--main-yellow);
}

.contenedorFilter span:nth-child(3) {
    width: 10px;
    height: 2px;
    margin: 3px;
    background-color: var(--main-yellow);
}

.contenedorFilter:hover span:nth-child(3) {
    width: 5px;
}

```



> Sí no conoces CSS, JS te costará mil veces .

<br>
<br>

## Este código no ha sido testeado, por lo tanto lo puedes mejorar mil veces mas

<br>
Parte importante de tu aprendizaje en web design, es la utilización de APIs y manejo del DOM con un enfoque en desarrollo web 2021, evita esmerarte en que tu aplicación sea compatible con IE, ya tiene una muerte anunciada así que mejorar preparate para adentrarte en del desarrollo mordenos, APIS, Frameworks, Javascript Moderno...
<br>




Es el encarga de cambiar la propiedad de display none a block y viceversa, puedes animar la transición del elemento contenedor como práctica o simplemente dejarlo como está actualmente.

<br>

Este es mi correo profesional ***jose@joseamaya.tech***, si me escribes te aseguro que tendrás una respuesta.

Atentamente, 

<br>

![Perfil](https://res.cloudinary.com/www-ismyt-com/image/upload/v1628821040/IMAGENES/GITHUB/profile_qcrojr.png)<br>
<strong style="color:#4E54FF;">José A. Amaya</strong>


<br>
<br>

[Link al repo](https://github.com/syntaxter/spacex-api-rockets)
<br>

[Link a la demo](https://syntaxter.github.io/node-dashboard-campaigns/)
<br>

[Siguemente en las redes como @syntaxter](https://www.instagram.com/syntaxter/)



