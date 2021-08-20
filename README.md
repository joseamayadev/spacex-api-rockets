#  Vista para extraer datos de cohetes desde SpaceX API 🍋
![](https://res.cloudinary.com/www-ismyt-com/image/upload/v1628822848/IMAGENES/GITHUB/header-jordan-animation_c1is5k.svg)
<br>

Este fue uno de mis primeros diseños enfocados en el aprovechamiento de un backend que gestionaba el envío masivo a través de un hosting basado en PHP para obtener un archivo CSV, transformarlo a JSON y luego decodificarlo.
<br>

Abajo te explico como utilizar este diseño en tu web o relacionarlo con otros mencionandote las clases principales.
<br><br>

### Veamos como se ve el diseño final 🍋
<br>

![](https://res.cloudinary.com/www-ismyt-com/image/upload/v1628914206/IMAGENES/GITHUB/DASHVOARD-ENVIOS-MASIVOS/github-preview-mini-dashboard-twilio_qmfo9u.png)

<br>
<br>

### 🍋 Y también tiene un campo para introducción de datos
<br>
Esto lo puedes reciclar como un componente para un framework o simplemente usarlo como JS simple para gestionar peticiones para almacenar datos en una db, json o cualquier lugar donde lo utilices de forma recurrente. 

![](https://res.cloudinary.com/www-ismyt-com/image/upload/v1628914558/IMAGENES/GITHUB/DASHVOARD-ENVIOS-MASIVOS/github-preview-mini-dashboard-form_ine9lk.png)

## ¿Conocimiento importantes para el desarrollo?

* CSS / Variables
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

* CSS / Display grid
```
element {
    display: grid;
    grid-template-columns: 30% 70%;
}

```

* CSS / Display Flex 

```
.contenedorLogo {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 20px;
}
```

* CSS / Mixing CSS Hover Parent to Child
```
.contenedorPerfil img:hover~span {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: translateX(7px);
    background: var(--blue-color);
    transition: 0.5s;
}
```


* CSS / Postion Fixed
```
.pencil {
    position: fixed;
    width: 75px;
    height: 75px;
    background-color: var(--yellow-color);
    left: 50px;
    bottom: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
```


* CSS / Postion reset styles (inputs)
```
.formularioArchivo input {
    width: 80%;
    height: 40px;
    border: none;
    border-bottom: 3px solid var(--yellow-color);
    margin: 20px;
    padding: 10px;
    background: transparent;
    outline: none;
    font-size: 1.3rem;
    color: #fff;
}
```

* CSS / Microinteraction for close button
```
#closeOpen::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 2px;
    background-color: var(--yellow-color);
    transform: rotate(45deg);
    transition: .4s;
}

#closeOpen:hover::after {
    transform: rotate(0deg);
    transition: .4s;
}

#closeOpen::before {
    content: "";
    position: absolute;
    width: 25px;
    height: 2px;
    background-color: var(--yellow-color);
    transform: rotate(-45deg);
    transition: .4s;
}

#closeOpen:hover::before {
    transform: rotate(0deg);
    transition: .4s;
}
```



> Sí no conoces CSS te costará mil veces .

<br>
<br>

## El código en Javascript que permite mostrar/ocultar el formulario de carga de contenido

<br>
Este formulario solo contiene datos importantes para completar la funcionalidad de carga del elemento principal, este elemento permite que puedas enviar una petición, put, post, delete, get para renderizar los datos desde el servidor tienes el botón principal para procesar todos estos.
<br>

* Código en js / Frontend

```
closeOpen.addEventListener('click', () => {
    contenedorPopUp.style.display = "none";
})

pencil.addEventListener('click', () => {
    contenedorPopUp.style.display = "grid";
})

```



Es el encarga de cambiar la propiedad de display none a block y viceversa, puedes animar la transición del elemento contenedor como práctica o simplemente dejarlo como está actualmente.

<br>

Este es mi correo profesional ***jose@joseamaya.tech***, si me escribes te aseguro que tendrás una respuesta.

Atentamente, 
<br>
<br>
[Link al repo](https://github.com/syntaxter/node-dashboard-campaigns)
<br>

[Link a la demo](https://syntaxter.github.io/node-dashboard-campaigns/)
<br>

[Siguemente en las redes como @syntaxter](https://www.instagram.com/syntaxter/)
<br>

![Perfil](https://res.cloudinary.com/www-ismyt-com/image/upload/v1628821040/IMAGENES/GITHUB/profile_qcrojr.png)<br>
<strong style="color:#4E54FF;">José A. Amaya</strong>



