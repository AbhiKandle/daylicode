document.querySelector("form").addEventListener("submit", myfun);

function myfun(event) {
  event.preventDefault();
  let t_name = document.querySelector("#task").value;

  let t_prio = document.querySelector("#priority").value;

  let trow = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.innerText = t_name;
  let td2 = document.createElement("td");
  td2.innerText = t_prio;
  if (td2.innerText == "High") {
    td2.style.background = "red";
  } else {
    td2.style.background = "green";
  }
  let td3 = document.createElement("td");
  td3.innerText = "delete";

  trow.append(td1, td2, td3);

  document.querySelector("tbody").append(trow);

  td3.addEventListener("click", del);
}

function del(event) {
  event.target.parentNode.remove();
}
