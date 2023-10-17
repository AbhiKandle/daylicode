let form = document.querySelector("form").addEventListener("submit", myfun);
let count = 1;
let total = 0;

function myfun(event) {
  event.preventDefault();
  let obj = {
    name: document.querySelector("#compName").value,
    market: document.querySelector("#listedExchange").value,
    Industry: document.querySelector("#industry").value,
    price: document.querySelector("#stockPrice").value,
    quant: document.querySelector("#quantity").value,
    type: document.querySelector("#type").value,
  };

  if (
    obj.name == "" ||
    obj.market == "" ||
    obj.Industry == "" ||
    obj.price == "" ||
    obj.quant == "" ||
    obj.name == ""
  ) {
    alert("plz enter valid information");
  } else {
    document.querySelector("#noOfStock").innerText = count++;
    total += +(obj.price * obj.quant);
    document.querySelector("#totalPortfolio").innerText = total;

    let trow = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = obj.name;

    let td2 = document.createElement("td");
    td2.innerText = obj.market;

    let td3 = document.createElement("td");
    td3.innerText = obj.Industry;

    let td4 = document.createElement("td");
    td4.innerText = obj.price;

    let td5 = document.createElement("td");
    td5.innerText = obj.quant;

    let td6 = document.createElement("td");
    td6.innerText = obj.type;

    let td7 = document.createElement("td");
    td7.innerText = +(obj.price * obj.quant);
    rprice = td7.innerText;
    let td8 = document.createElement("td");
    td8.innerText = new Date();

    let td9 = document.createElement("td");
    td9.innerText = "sell";
    td9.style.backgroundColor = "red";
    td9.addEventListener("click", fun);

    trow.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);
    document.querySelector("tbody").append(trow);
  }
}

let srow = 1;
let a = [];
let newprice = 0;
function fun(event) {
  srow++;
  document.querySelector("#noOfStock").innerText = count - srow;

  a.push(document.querySelector("td:nth-child(7)").innerHTML);
  newprice = total - a[a.length - 1];
  document.querySelector("#totalPortfolio").innerText = newprice;
  total = newprice;
  event.target.parentNode.remove();
}
