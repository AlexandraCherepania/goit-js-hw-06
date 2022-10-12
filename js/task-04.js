const btnDecrement = document.querySelectorAll("button")[0];
console.log(btnDecrement);

const btnIncrement = document.querySelectorAll("button")[1];
console.log(btnIncrement);

let counterValue = 0;

btnDecrement.addEventListener('click', (event) => {
    counterValue = counterValue - 1;
    const valueEl = document.querySelector(`span`);
    valueEl.textContent = counterValue;
});

btnIncrement.addEventListener('click', (event) => {
    counterValue += 1;
    const valueEl = document.querySelector(`span`);
    valueEl.textContent = counterValue;
});



