//UTILIZAMOS FETCH     //SEIMPRE SE OCUPARIA EL MISMO CODIGO     //FUNCION PARA CONSULTAR DATOS Y PARA TRAERLOS


function fetchDatos () {
fetch('https://reqres.in/api/users')  
.then(response => response.json())
.then(json => {                                    //json entrega la informacion completa dentro dela array
    for(let i = 0; i < json.data.length; i++){    //accedo al array uy lo iteramos hasta tener todos los datos que estan contenidos en data
    addUser(json.data[i]);
        console.log(json.data[i])
    }
})

//permite capturar respuesta de error cuando no es verdadero.
.catch (err => console.log("Solicitud fallida", err)); 
}

//INYECTAR DATOS EN EL HTML(DOM)

const itemsConainer = document.getElementById("users");

//funcion para imprimir contenido en pantalla
function addUser(user) {
    const inyectarHTML =
    '<div class = "col-lg-2" >' +
    '<div class = "card">' +
    '<img src=' + user.avatar + '\n' + 'class="card-img-top">' +
    '<div class= "card-body" data_id=' + user.id + '>' +
    '<h3 class= "card-title">' + user.first_name + ' ' + user.last_name + '</h3>'+
    '<p class= "card-text">' + user.email + '</p>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<br/>';
    itemsConainer.innerHTML += inyectarHTML;
}
fetchDatos();



