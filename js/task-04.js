const lastValue = document.querySelector('#value');
const minustBtn = document.querySelector('[data-action="decrement"]');
const plustBtn = document.querySelector('[data-action="increment"]');

let currentValue = 0;

minustBtn.addEventListener('click', () => {
currentValue -= 1;
lastValue.textContent = currentValue;
});

plustBtn.addEventListener('click', () => {
currentValue += 1;
lastValue.textContent = currentValue;
});