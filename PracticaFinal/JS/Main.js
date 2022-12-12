
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

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()