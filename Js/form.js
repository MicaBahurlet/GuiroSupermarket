let nombre = document.getElementById("name");
let apellido = document.getElementById("surname");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let message = document.getElementById("message");
let btnSubmit = document.getElementById("submit");

let information = [];


btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    information [0] = nombre.value;
    information [1] = apellido.value;
    information [2] = email.value;
    information [3] = phone.value;
    information [4] = message.value;
    console.log(information);

    //corchete para que separe la info por comas 
    let blob = new Blob ([information], {type: "text/plain;charset=utf-8"});

    saveAs(blob, "contactoData.txt");



})