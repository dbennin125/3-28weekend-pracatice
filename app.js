
const dasbutton = document.getElementById('button');

function now() {
    const nameInput = document.getElementById('name');
    const nameOutput = nameInput.value;
    const nameOut = document.getElementById('outName');
    nameOut.textContent = nameOutput; 

    const numInput = document.getElementById('number');
    const numberOut = numInput.value;
    const numOut = document.getElementById('outNum');
    numOut.textContent = numberOut;
}
dasbutton.addEventListener ('click', now);