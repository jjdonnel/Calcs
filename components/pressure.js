
function displayPressure() {
    const Root = document.getElementById('root');
    
    if (Root.classList.contains('show')) {
        Root.classList.remove('show');
    };

    Root.innerHTML = 
    `<div class="section">
        <div class="values">
            <label>Millibars</label>
            <input type="number" id="mb" placeholder="Millibars">
        </div>

        <div>
            <label>Inches Hg</label>
            <input type="number" id="hg" placeholder="inHg">
        </div>

        <div>
            <label>PSI</label>
            <input type="number" id="psi" placeholder="PSI">
        </div>
    </div>`;
    Root.classList.toggle('show');

    let mb =
        document.getElementById('mb');
    let hg =
        document.getElementById('hg');
    let psi =
        document.getElementById('psi');

    mb.oninput = function () {
        let h = parseFloat(mb.value) * 0.03;
        hg.value = parseFloat(h.toFixed(2));

        let p = parseFloat(mb.value) * 0.0145;
        psi.value = parseFloat(p.toFixed(2));
    }
    hg.oninput = function () {
        let m = parseFloat(hg.value) * 33.86;
        mb.value = parseFloat(m.toFixed(2));

        let p = parseFloat(hg.value) * 0.49;
        psi.value = parseFloat(p.toFixed(2));
    }
    psi.oninput = function () {
        let m = parseFloat(psi.value) * 68.95;
        mb.value = parseFloat(m.toFixed(2));

        let h = parseFloat(psi.value) * 2.04;
        hg.value = parseFloat(h.toFixed(2));
    }
}