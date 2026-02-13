const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const product = products.find(p => p.id == id);
const container = document.getElementById("product");

container.innerHTML = `
  <div class="bg-white p-4 rounded shadow">
    <img src="${product.image}" class="w-full rounded">
    <h2 class="text-xl font-bold mt-2">${product.name}</h2>
    <p class="text-gray-600 mt-2">${product.description}</p>
    <p class="text-lg font-bold mt-2">£${product.price}</p>
    <button onclick="addToCart(${product.id})"
      class="bg-black text-white px-4 py-2 mt-3 rounded">
      Add to Cart
    </button>
  </div>
`;
