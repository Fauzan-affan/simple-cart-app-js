const incrementQty = (qty) => qty + 1;
const decrementQty = (qty) => qty - 1;

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
