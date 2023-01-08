
function cargar() {
  let URL = document.URL;
  if (URL.toUpperCase().includes("CONTACTO")) {
    document.getElementById("Contacto").className += " nav-active";
    document.getElementById("GIT").className += " nav-active";
  }
  if (URL.toUpperCase().includes("PIRAMIDES")) {
    document.getElementById("Piramides").className += " nav-active";
  }
  if (URL.toUpperCase().includes("INDEX")) {
    document.getElementById("Index").className += " nav-active";
  }
  if (URL.toUpperCase().includes("TEORIAS")) {
    document.getElementById("Teorias").className += " nav-active";
  }
  if (URL.toUpperCase().includes("DIOSES")) {
    document.getElementById("Dioses").className += " nav-active";
  }
}


document.addEventListener("DOMContentLoaded", cargar, false);

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
//Utilizamos Esto para poder añadir los elementos footer y navbar de manera mas eficiente ya que si no tendriamos que crearlos cada vez
document.getElementsByTagName('footer')[0].innerHTML =
  `
  <div class="footer-div">
      <p class="Title">Copyright Nicolas Klaue</p>
      <a class="Text" rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img
              alt="Creative Commons License" style="border-width:0"
              src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
          </a>
              <span class="Text">This work is licensed under a</span>
              <a class="Text" rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
  </div>`;
document.getElementsByTagName('header')[0].innerHTML =
  `
  <nav class="navbar">
      <div class="nav-section Logo" id="Index">
          <a href="index.html">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                  class="bi bi-house-door-fill" viewBox="0 0 16 16">
                  <path
                      d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0zM2 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1z" />
              </svg>
          </a>
      </div>
      <div class="nav-section Pages">
          <div class="link" id ="Piramides">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-triangle-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"/>
</svg>
          <a href="Piramides.html" >Piramides</a>
          </div>
          <div class="link" id ="Teorias">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
</svg>
          <a href="Teorias.html" >Teorias</a></div>
          <div class="link" id ="Dioses">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-alt-high" viewBox="0 0 16 16">
  <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4zm0 1a3 3 0 0 1 2.959 2.5H5.04A3 3 0 0 1 8 8z"/>
</svg>
          <a href="Dioses.html" >Dioses</a></div>
          <div class="link OnlySX" id ="Contacto"><a href="Contacto.html">Contacto</a></div>
      </div>
      </div>
      <div class="nav-section GIT" id="GIT">
          <a href="Contacto.html">Get In Touch</a>
      </div>
  </nav>`
  ;