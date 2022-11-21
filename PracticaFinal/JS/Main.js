
function CambiarNombre(){
    var principal = document.getElementById("Principal");
    if (principal.innerHTML != "Mario Muñoz") {
        principal.innerHTML = "Mario Muñoz";
    }else{
        principal.innerHTML = "Principal";
    }
}

function cargar(){
    document.getElementById("CambiarNombre").addEventListener("click",CambiarNombre);
}


document.addEventListener("DOMContentLoaded",cargar,false);