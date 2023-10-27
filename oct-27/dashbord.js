let data = JSON.parse(localStorage.getItem("toDashbord")) || [];

let trash = JSON.parse(localStorage.getItem("trash")) || [];

let con = document.querySelector("#container");
data.forEach(function (el, index) {
  let div = document.createElement("div");

  let n = document.createElement("h3");
  n.innerText = `name: ${el.name}`;

  let c = document.createElement("h3");
  c.innerText = `course: ${el.course}`;

  let u = document.createElement("h3");
  u.innerText = `unit: ${el.unit}`;

  let i = document.createElement("img");
  i.src = el.image;

  let b = document.createElement("h3");
  b.innerText = `Batch: ${el.Batch}`;

  let btn = document.createElement("button");
  btn.innerText = "delete";
  btn,
    addEventListener("click", function () {
      deleteStudent(el, index);
    });

  div.append(n, c, u, i, b, btn);
  con.append(div);
});

function deleteStudent(el, i) {
  trash.push(el);
  localStorage.setItem("trash", JSON.stringify(trash));

  // deleting the row
  data.splice(i, 1);
  localStorage.setItem("toDashbord", JSON.stringify(data));

  window.location.reload();
}

let Batchobj = {};

data.filter(function (el) {
  if (Batchobj[el.Batch] === undefined) {
    return (Batchobj[el.Batch] = 1);
  } else {
    return Batchobj[el.Batch]++;
  }
});

let nav = document.querySelector("#nav");
for (let i in Batchobj) {
  let H2 = document.createElement("h2");
  H2.innerText = `Batch-${i} :- ${Batchobj[i]},`;

  nav.append(H2);
}
