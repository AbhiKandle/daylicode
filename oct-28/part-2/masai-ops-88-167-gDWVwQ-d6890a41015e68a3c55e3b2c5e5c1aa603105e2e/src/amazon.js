function Listing(n, c, i, p) {
  (this.product_name = n),
    (this.category = c),
    (this.image = i),
    (this.price = p);
}

function getFormData() {
  let name = document.getElementById("name").value;
  let category = document.getElementById("category").value;
  let image = document.getElementById("img").value;
  let price = document.getElementById("price").value;

  let list = new Listing(name, category, image, price);
  addListing(list);
}

function addListing(x) {
  let toLocal = JSON.parse(localStorage.getItem("products")) || [];
  toLocal.push(x);

  localStorage.setItem("products", JSON.stringify(toLocal));
}

window.onload = function () {
  //  get the form here and add submit event and handle the preventDefault
  let form = document.querySelector("#form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    getFormData();
  });
};

// donot chnage the export statement

// if (typeof exports !== "undefined") {
//   module.exports = {
//     Listing,
//     addListing,
//   };
// }
