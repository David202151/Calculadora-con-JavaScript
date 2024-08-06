document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');

    // Agregar event listeners a todos los botones
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            handleButtonClick(button.innerText);
        });
    });

    // Manejar las pulsaciones del teclado
    document.addEventListener('keydown', (event) => {
        handleKeyboardInput(event.key);
    });

    // Función para manejar los clics de los botones
    function handleButtonClick(value) {
        if (value === 'C') {
            clearDisplay();
        } else if (value === '=') {
            calculateResult();
        } else {
            appendToDisplay(value);
        }
    }

    // Función para manejar las entradas del teclado
    function handleKeyboardInput(key) {
        if (key >= '0' && key <= '9') {
            appendToDisplay(key);
        } else if (key === '.') {
            appendToDisplay('.');
        } else if (key === '/' || key === '*' || key === '-' || key === '+') {
            appendToDisplay(key);
        } else if (key === 'Enter' || key === '=') {
            calculateResult();
        } else if (key === 'Backspace') {
            backspace();
        } else if (key === 'Escape' || key.toLowerCase() === 'c') {
            clearDisplay();
        }
    }

    // Añadir el valor al display
    function appendToDisplay(value) {
        if (value === '.' && display.value.includes('.')) {
            return; // Evitar múltiples puntos decimales
        }
        display.value += value;
    }

    // Borrar el display
    function clearDisplay() {
        display.value = '';
    }

    // Borrar el último carácter (función de retroceso)
    function backspace() {
        display.value = display.value.slice(0, -1);
    }

    // Calcular el resultado
    function calculateResult() {
        try {
            // Evaluar la expresión matemática y mostrar el resultado
            const result = eval(display.value);

            if (isNaN(result) || !isFinite(result)) {
                alert('Operación no válida');
                clearDisplay();
            } else {
                display.value = result;
            }
        } catch (error) {
            alert('Operación no válida');
            clearDisplay();
        }
    }
});
