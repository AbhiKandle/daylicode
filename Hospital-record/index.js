// fill in javascript code here

document.querySelector("form").addEventListener("submit", myfun);

function myfun(event) {
  event.preventDefault();

  let doctor = document.querySelector("#name").value;
  let ids = document.querySelector("#docID").value;
  let dep = document.querySelector("#dept").value;
  let experience = document.querySelector("#exp").value;
  let emails = document.querySelector("#email").value;
  let no = document.querySelector("#mbl").value;

  if (
    doctor == "" ||
    ids == "" ||
    dep == "" ||
    experience == "" ||
    emails == "" ||
    no == ""
  ) {
    alert("plz enter valid information");
  } else {
    let trow = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = doctor;

    let td2 = document.createElement("td");
    td2.innerText = ids;

    let td3 = document.createElement("td");
    td3.innerText = dep;

    let td4 = document.createElement("td");
    td4.innerText = experience;

    let td5 = document.createElement("td");
    td5.innerText = emails;

    let td6 = document.createElement("td");
    td6.innerText = no;

    let td7 = document.createElement("td");
    if (experience > 5) {
      td7.innerText = "Senior";
    } else if (experience >= 2 && experience <= 5) {
      td7.innerText = "Junior";
    } else {
      td7.innerText = "Trainee";
    }

    let td8 = document.createElement("td");
    td8.innerText = "Delete";
    td8.style.backgroundColor = "red";
    td8.addEventListener("click", del);

    trow.append(td1, td2, td3, td4, td5, td6, td7, td8);
    document.querySelector("tbody").append(trow);

    doctor = document.querySelector("#name").value = "";
    ids = document.querySelector("#docID").value = "";
    dep = document.querySelector("#dept").value = "";
    experience = document.querySelector("#exp").value = "";
    emails = document.querySelector("#email").value = "";
    no = document.querySelector("#mbl").value = "";
  }
}

function del(event) {
  event.target.parentNode.remove();
}
