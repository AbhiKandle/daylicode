function tata(w, m, c, s, f) {
  (this.wheels = w),
    (this.model = m),
    (this.color = c),
    (this.speed = s),
    (this.fule = f);
}

let car = new tata(4, "gt-mustang-1969", "black", 180, "petrol");

console.log(car);

tata.prototype.setSpeed = function (s) {
  this.speed = s;
};
car.setSpeed(200);

tata.prototype.updateColor = function (s) {
  this.color = s;
};

car.updateColor("red");

console.log(car);
