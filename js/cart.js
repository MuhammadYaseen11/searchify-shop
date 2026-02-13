const cartItemsContainer = document.getElementById("cartItems");
const totalEl = document.getElementById("total");

const cart = getCart();
let total = 0;

cart.forEach(id => {
  const product = products.find(p => p.id === id);
  total += product.price;

  const item = document.createElement("div");
  item.className = "bg-white p-3 rounded shadow flex justify-between";

  item.innerHTML = `
    <span>${product.name}</span>
    <span>£${product.price}</span>
  `;

  cartItemsContainer.appendChild(item);
});

totalEl.textContent = "Total: £" + total;
