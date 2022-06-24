const { clear } = require("@11ty/eleventy/src/TemplateCache");

var url = "http://localhost:5000/amigos" ;

let showFriends = function(){
    $("#lista").empty();
    $.get(`${url}`, function(friends){
        console.log(friends);
        friends.forEach(e => {
            // let li = document.createElement("li");
            // li.id = e.id;
            // li.innerHTML = e.name;
            // let list = document.getElementById("lista");
            // list.appendChild("li");

            $("#lista").append(`<li id="${e.id}">${e.name}
                                    <button id="${e.id}" onclick="deleteFriend(${e.id})">X</button>
                                </li>`)
        })
    })
};
$("#boton").click(showFriends);


$("#search").click(function(){
    let id = $("#input").val();
    // console.log(id);

    if (id){
        // get (http://localhost:5000/amigos/id)
        $.get(`${url}/${id}`, function(friend){
            //console.log(friend);
            $("#amigo").text(`Nombre: ${friend.name} || Edad: ${friend.age} || Email: ${friend.email}`);
            $("#input").val("");
        })
    } else{
        $("#amigo").text("Tenes que ingresar un ID");
    }
});

let deleteFriend = function(idCruz){
    let id;

    if (typeof idCruz === "number"){
        id = idCruz;
    } else{
        id = $("#inputDelete").val();
    }

    let friend;

    if (id){
        // $.ajax({
        //     url: `${url}/${id}`,
        //     type: "GET",
        //     success: function(f){
        //         friend = f;
        //     }
        // })

        $.get(`${url}/${id}`, function(f){
            friend = f;
        });

        // url, type, success
        $.ajax({
            url: `${url}/${id}`,
            type: "DELETE",
            success: function(){
                $("#success").text(`Tu amigo, ${friend.name} fue eliminado con exito`);
                $("#inputDelete").val("");
                showFriends();

            }
        })
    } else{
        $("#success").text("Tenes que ingresar un ID");
    }
};
$("#delete").click(deleteFriend);

// 4 METODOS PRINCIPALES HTTP

// GET => SOLICITAR INFORMACION
// POST => AGREGAR UN NUEVO DATO
// PUT => MODIFICAR INFORMACION, O UN DATO EXISTENTE
// DELETE => PARA ELIMINAR INFORMACION, O UN DATO EXISTENTE

// $a,jax({url: url_api, type: metodo_http, success: callback})
