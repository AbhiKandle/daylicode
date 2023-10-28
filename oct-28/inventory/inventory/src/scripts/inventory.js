function redirect(x) {
  window.location.href = x;
}

function append(x) {
  x.filter(function (el, i) {
    let div = document.createElement("div");

    let name = document.createElement("h3");
    name.innerText = `name: ${el.name}`;
    let brand = document.createElement("h3");
    brand.innerText = `brand: ${el.brand}`;
    let price = document.createElement("h3");
    price.innerText = `price: ${el.price}`;
    let imageLink = document.createElement("img");
    imageLink.src = el.image;
    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.addEventListener("click", function () {
      remove(i);
    });

    div.append(name, brand, price, imageLink, btn);
    document.getElementById("products_data").append(div);
  });
}

function remove(i) {
  inve_data.splice(i, 1);
  localStorage.setItem("product_data", JSON.stringify(inve_data));
  window.location.reload();
}

let inve_data = JSON.parse(localStorage.getItem("product_data"));
append(inve_data);

document.getElementById("home").addEventListener("click", function () {
  redirect("./index.html");
});

if (typeof exports !== "undefined") {
  module.exports = {
    append,
    remove,
  };
}
