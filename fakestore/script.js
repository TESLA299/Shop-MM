const fetured_products = document.querySelector("#featured_products");
document.querySelector("#btn").addEventListener("click", () => {
  localStorage.removeItem("email");
  window.location.href = "/login";
});

if (!localStorage.getItem("email")) {
  window.location.href = "/login";
}
const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products?limit=4");
  if (response.ok) {
    return await response.json();
  }
  return [];
};
getProducts().then((data) => {
  data.forEach((products) => {
    const fetured = document.createElement("div");

    fetured.className = "px-4 py-3 rounded-xl shadow";
    fetured.innerHTML = `
    <img class="h-[200px] w-full rounded-xl "src="${products.image}"/>
    <h1 class = "text-xl text-semibold ">${products.title}</h1>
    <p class="text-sm text-semibold">${products.descriptation}</p>
    `;
    fetured_products.append(fetured);
  });
});
