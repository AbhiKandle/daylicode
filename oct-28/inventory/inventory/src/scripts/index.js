function redirect(x) {
  window.location.href = x;
}

function list(n, b, p, i) {
  (this.name = n), (this.brand = b), (this.price = p), (this.image = i);
}

function getFormData() {
  let name = document.getElementById("name").value;

  let brand = document.getElementById("brand").value;

  let price = document.getElementById("price").value;

  let imageLink = document.getElementById("img").value;

  let listobj = new list(name, brand, price, imageLink);
  addData(listobj);

  window.location.reload();
}

function addData(x) {
  let data = JSON.parse(localStorage.getItem("product_data")) || [];
  data.push(x);

  localStorage.setItem("product_data", JSON.stringify(data));
}

document.getElementById("btn").addEventListener("click", function () {
  redirect("./inventory.html");
});

document
  .getElementById("product_form")
  .addEventListener("submit", function (el) {
    el.preventDefault();
    getFormData();
  });

if (typeof exports !== "undefined") {
  module.exports = {
    addData,
    redirect,
  };
}
