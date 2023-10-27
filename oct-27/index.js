let form = document.querySelector("#form");
form.addEventListener("submit", formData);
let data = JSON.parse(localStorage.getItem("toDashbord")) || [];
function formData(event) {
  event.preventDefault();

  let name = form.name.value;

  let course = form.course.value;

  let unit = form.unit.value;

  let img = form.url.value;

  let batch = form.batch.value;

  let s1 = new studentobj(name, course, unit, img, batch);
  data.push(s1);

  localStorage.setItem("toDashbord", JSON.stringify(data));
  window.location.reload();
}

function studentobj(n, c, u, i, b) {
  (this.name = n),
    (this.course = c),
    (this.unit = u),
    (this.image = i),
    (this.Batch = b);
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

console.log(Batchobj);
