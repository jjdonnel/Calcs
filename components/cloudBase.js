
function displayCloudBase() {
    const Root = document.getElementById('root');
    Root.classList.remove('show');
    Root.innerHTML = 
        `<div class="section">
            <div>
                <label>Temp</label>
                <input type="number" id="temp" placeholder="deg F">
            </div>
            <div>
                <label>Dew Point</label>
                <input type="number" id="dewPoint" placeholder="deg F">
            </div>
            <div>
                <label>Cloud Base</label>
                <input type="number" id="cloudBase" placeholder="feet">
            </div>
        </div>`;
    Root.classList.add('show');

    let temp =
        document.getElementById('temp');
    let dewPoint =
        document.getElementById('dewPoint');
    let cloudBase =
        document.getElementById('cloudBase');

    temp.oninput = function () {
        let b = parseInt((temp.value - dewPoint.value) * 220);
        cloudBase.value = Math.round(parseInt(b) / 100) * 100;
    }
    dewPoint.oninput = function () {
        let b = parseInt((temp.value - dewPoint.value) * 220);
        cloudBase.value = Math.round(parseInt(b) / 100) * 100;
    }
}