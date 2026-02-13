const store = document.getElementById("store");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "bg-white p-3 rounded shadow";

  card.innerHTML = `
    <img src="${product.image}" class="w-full h-40 object-cover rounded">
    <h2 class="font-bold mt-2">${product.name}</h2>
    <p class="text-gray-600">£${product.price}</p>
    <a href="product.html?id=${product.id}"
       class="block text-center bg-black text-white mt-2 py-1 rounded">
       View Product
    </a>
  `;

  store.appendChild(card);
});
