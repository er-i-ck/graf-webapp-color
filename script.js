document.addEventListener("DOMContentLoaded", function () {
    const red = document.getElementById("red");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");

    const redValue = document.getElementById("red-value");
    const greenValue = document.getElementById("green-value");
    const blueValue = document.getElementById("blue-value");

    const colorBox = document.getElementById("color-box");
    const hexCode = document.getElementById("hex-code");
    const colorPicker = document.getElementById("color-picker");

    function updateColor() {
        let r = parseInt(red.value);
        let g = parseInt(green.value);
        let b = parseInt(blue.value);

        let hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        colorBox.style.backgroundColor = hex;
        hexCode.textContent = hex.toUpperCase();
        colorPicker.value = hex;

        // Sincronizar los valores de los inputs numéricos con los sliders
        redValue.value = r;
        greenValue.value = g;
        blueValue.value = b;
    }

    function updateSliders() {
        let r = parseInt(redValue.value);
        let g = parseInt(greenValue.value);
        let b = parseInt(blueValue.value);

        r = Math.min(255, Math.max(0, r));
        g = Math.min(255, Math.max(0, g));
        b = Math.min(255, Math.max(0, b));

        red.value = r;
        green.value = g;
        blue.value = b;

        updateColor();
    }

    function updateFromPicker() {
        let hex = colorPicker.value;
        let r = parseInt(hex.substr(1, 2), 16);
        let g = parseInt(hex.substr(3, 2), 16);
        let b = parseInt(hex.substr(5, 2), 16);

        red.value = r;
        green.value = g;
        blue.value = b;

        redValue.value = r;
        greenValue.value = g;
        blueValue.value = b;

        colorBox.style.backgroundColor = hex;
        hexCode.textContent = hex.toUpperCase();
    }

    // Eventos para los sliders
    red.addEventListener("input", updateColor);
    green.addEventListener("input", updateColor);
    blue.addEventListener("input", updateColor);

    // Eventos para los campos numéricos
    redValue.addEventListener("input", updateSliders);
    greenValue.addEventListener("input", updateSliders);
    blueValue.addEventListener("input", updateSliders);

    // Evento para el color picker
    colorPicker.addEventListener("input", updateFromPicker);

    // Inicializar el color
    updateColor();
});
