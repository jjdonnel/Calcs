
function displayTemp() {
    const Root = document.getElementById('root');
    Root.classList.remove('show');
    Root.innerHTML = 
    `<div class="section">
        <div>
            <label>Fahrenheit</label>
            <input type="number" id="fahrenheit" placeholder="Fahrenheit">
        </div>

        <div>
            <label>Celsius</label>
            <input type="number" id="celsius" placeholder="Celsius">
        </div>
        <div>
            <label>Kelvin</label>
            <input type="number" id="kelvin" placeholder="Kelvin">
        </div>
    </div>`;
    Root.classList.add('show');

    let celsius =
        document.getElementById('celsius');
    let fahrenheit =
        document.getElementById('fahrenheit');
    let kelvin =
        document.getElementById('kelvin');

    celsius.oninput = function () {
        let f = (parseFloat(celsius.value) * 9) / 5 + 32;
        fahrenheit.value = parseFloat(f.toFixed(1));

        let k = (parseFloat(celsius.value) + 273.15);
        kelvin.value = parseFloat(k.toFixed(2));
    }
    fahrenheit.oninput = function () {
        let c = ((parseFloat(
            fahrenheit.value) - 32) * 5) / 9;
        celsius.value = parseFloat(c.toFixed(1));
        let k = (parseFloat(
            fahrenheit.value) - 32) * 5 / 9 + 273.15;
        kelvin.value = parseFloat(k.toFixed(2));
    }

    kelvin.oninput = function () {
        let f = (parseFloat(
            kelvin.value) - 273.15) * 9 / 5 + 32;
        fahrenheit.value = parseFloat(f.toFixed(1));

        let c = (parseFloat(kelvin.value) - 273.15);
        celsius.value = parseFloat(c.toFixed(1));
    }
}

