    const inicio = document.querySelector('#inicio');

    console.log(inicio);
    
    inicio.addEventListener('click', mostrar);
    
    // var tabla;
    let tabla;
    function mostrar(){
        tabla += '  <div class="contenedor">';
        tabla += '    <div class="contenedor-texto">';
        tabla += '      <div class="texto">';
        tabla += '        <h1 class="nombre">Flores El Pino</h1>';
        tabla += '        <h2 class="profesion">De Nuestros Colaboradores Para el Mundo</h2>';
        tabla += '      </div>';
        tabla += '    </div>';
        tabla += '  </div>';

        document.querySelector("cosa").innerHTML=tabla;
    }

    // function muestra_oculta(id){
    //     if (document.getElementById){ //se obtiene el id
    //     var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
    //     el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
    //     }
    // }
        
    // window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
    //     muestra_oculta('cosa');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
    // }