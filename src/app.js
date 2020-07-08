const { incrementQty, decrementQty } = require("./function.js");

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');

incrButton.addEventListener('click', () => {
  console.log(incrButton)
  qtyInput.value = incrementQty(qtyInput.value);
});

decrButton.addEventListener('click', () => {
  console.log(decrButton)
  qtyInput.value = decrementQty(qtyInput.value);
});