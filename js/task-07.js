const inputTextRef = document.querySelector("#text");
const controlEl = document.querySelector("#font-size-control");
console.log(controlEl);

controlEl.addEventListener("input", () => {
const rangeVarEl = controlEl.value;
    console.log(rangeVarEl)
    inputTextRef.style.fontSize = controlEl.value + 'px';

});


