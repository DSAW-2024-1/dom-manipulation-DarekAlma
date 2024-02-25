const boton1 = document.getElementById('botoncito1');
const contenedor1 = document.getElementById('contenedor1');

boton1.addEventListener('click', function() {
    const inputListas = document.getElementById('AgregarListas');
    const dondevaeltexto = document.getElementById('pEnDondeVaElTexto').cloneNode(true);

    if (inputListas.value.trim() !== '') {
        // Clonar el contenedor existente
        const contenedorClonado = contenedor1.cloneNode(true);
        contenedorClonado.classList.remove('d-none');
        // Cambiar el ID del contenedor clonado para que sea único
        contenedorClonado.id = 'contenedorClonado';
        // Insertar el contenedor clonado después del contenedor original
        contenedor1.parentNode.insertBefore(contenedorClonado, contenedor1.nextSibling);

        // Establecer el valor del input en los nuevos contenedores
        dondevaeltexto.textContent = inputListas.value;
        contenedorClonado.querySelector('#pEnDondeVaElTexto').replaceWith(dondevaeltexto);

        // Evento para el botón dentro del contenedor clonado
        contenedorClonado.querySelector('#botoncito2').addEventListener('click', function() {
            contenedorClonado.remove();
        });

        contenedorClonado.querySelector('#miCheckbox').addEventListener('change', function() {
            if (this.checked) {
                dondevaeltexto.classList.add('texto-con-linea');
            } else {
                dondevaeltexto.classList.remove('texto-con-linea');
            }
        });

        const inputCheckbox = contenedorClonado.querySelector('#miCheckbox');

        // Evento para el checkbox dentro del contenedor clonado
        inputCheckbox.addEventListener('change', function() {
            if (this.checked) {
                dondevaeltexto.classList.add('texto-con-linea');
            } else {
                dondevaeltexto.classList.remove('texto-con-linea');
            }
        });

        // Clear input value
        inputListas.value = '';
    }
});