document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencias a elementos del DOM
    const conversionTypeSelect = document.getElementById("conversionType");
    const inputValue = document.getElementById("inputValue");
    const resultValue = document.getElementById("resultValue");
    const exchangeIcon = document.querySelector(".interfaz-solida");
    const heartIcon = document.querySelector(".contorno-corazon");
    const savedConversionsList = document.getElementById("savedConversions");

    // Agregar oyentes de eventos a elementos
    inputValue.addEventListener("input", convertirUnidades);
    exchangeIcon.addEventListener("click", intercambiarValores);
    heartIcon.addEventListener("click", guardarConversion);

    // Función para convertir unidades según el tipo seleccionado
    function convertirUnidades() {
        const conversionType = conversionTypeSelect.value;
        const value = parseFloat(inputValue.value);

        let result;
        switch (conversionType) {
            case "kmToMiles":
                result = value * 0.621371;
                break;
            case "milesToKm":
                result = value / 0.621371;
                break;
            case "feetToMeters":
                result = value * 0.3048;
                break;
            case "metersToFeet":
                result = value / 0.3048;
                break;
            case "cmToInches":
                result = value * 0.393701;
                break;
            case "inchesToCm":
                result = value / 0.393701;
                break;
        }

        // Mostrar el resultado con dos decimales
        resultValue.textContent = result.toFixed(2);
    }

    // Función para intercambiar los valores de entrada y resultado
    function intercambiarValores() {
        const valorActual = inputValue.value;
        const resultadoActual = resultValue.textContent;

        inputValue.value = resultadoActual;
        resultValue.textContent = valorActual;
    }
});