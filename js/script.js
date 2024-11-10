document.addEventListener("DOMContentLoaded", function () {
    // Fetch para cargar el archivo HTML
    fetch("/pp_educacioncontinua/componet/botonCurso.html")
        .then(response => {
            // Verificar si la respuesta fue exitosa
            if (!response.ok) throw new Error('No se pudo cargar el archivo');
            return response.text();
        })
        .then(data => {
            // Insertar el contenido del archivo HTML en el contenedor con la clase "footerContentCourse"
            const footerElement = document.querySelector(".footerContentCourse");
            if (footerElement) {
                footerElement.innerHTML = data;
            } else {
                console.error("No se encontró el contenedor .footerContentCourse");
            }
        })
        .catch(error => console.error("Error cargando botonCurso.html:", error));
});