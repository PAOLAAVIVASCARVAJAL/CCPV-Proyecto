document.getElementById('cotizacion-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('cliente-nombre').value;
    const nit = document.getElementById('cliente-nit').value;
    const direccion = document.getElementById('cliente-direccion').value;

    // Crear un objeto con los datos de la cotización
    const cotizacion = {
        nombre: nombre,
        nit: nit,
        direccion: direccion
    };

    // Mostrar los resultados en la página
    mostrarCotizacion(cotizacion);

    // Guardar en el archivo JSON (simulado)
    guardarCotizacion(cotizacion);

    // Limpiar el formulario
    document.getElementById('cotizacion-form').reset();
});

function mostrarCotizacion(cotizacion) {
    const resultadosDiv = document.getElementById('resultados');
    const cotizacionHTML = `
        <h3>Cotización Creada:</h3>
        <p>Nombre del Cliente: ${cotizacion.nombre}</p>
        <p>NIT: ${cotizacion.nit}</p>
        <p>Dirección: ${cotizacion.direccion}</p>
    `;
    resultadosDiv.innerHTML = cotizacionHTML;
}

function guardarCotizacion(cotizacion) {
    // Aquí puedes usar localStorage o un archivo JSON para guardar la cotización
    console.log("Cotización guardada:", cotizacion);
}
