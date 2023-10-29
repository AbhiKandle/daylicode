let div1 = document.getElementById("slid");

let imgarr = [
  "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6773/1366773-i-18687272b330",
  "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1080/sources/r1/cms/prod/2448/1602448-i-fbe90a6f290a",
  "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1080/sources/r1/cms/prod/8448/1608448-i-b67fdb90a02e",
];

let img = document.createElement("img");
img.src = imgarr[0];

div1.append(img);

function slid() {
  i = 1;
  setInterval(function () {
    img.src = imgarr[i];
    i++;

    if (i == imgarr.length) {
      i = 0;
    }
  }, 3000);
}

slid();

let movies = [
  {
    name: " Doctor Strange",
    release_date: "2022",
    poster:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6773/1366773-i-18687272b330",
    IMDb_rating: 4.5,
  },

  {
    name: " king of Kotha",
    release_date: "2023",
    poster:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1080/sources/r1/cms/prod/8448/1608448-i-b67fdb90a02e",
    IMDb_rating: 4,
  },

  {
    name: "AARYA",
    release_date: "2021",
    poster:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1080/sources/r1/cms/prod/2448/1602448-i-fbe90a6f290a",
    IMDb_rating: 3.5,
  },

  {
    name: "VIKRAM",
    release_date: "2022",
    poster:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_128/sources/r1/cms/prod/1791/1611791-i-3b22c4f693bd",
    IMDb_rating: 4.5,
  },
  {
    name: "LOKI",
    release_date: "2022",
    poster:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_128/sources/r1/cms/prod/7033/1607033-i-d6f937c102ac",
    IMDb_rating: 4.8,
  },

  {
    name: "MANSON",
    release_date: "2023",
    poster:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_128/sources/r1/cms/prod/4909/1604909-v-eafd1042bdcb",
    IMDb_rating: 3.8,
  },

  {
    name: "THOR",
    release_date: "2011",
    poster:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_128/sources/r1/cms/prod/8059/1368059-i-bbcefdfda4e4",
    IMDb_rating: 4.5,
  },

  {
    name: "MASTER PEACE",
    release_date: "2023",
    poster:
      "https://img10.hotstar.com/image/upload/f_auto,q_90,w_128/sources/r1/cms/prod/7401/1617401-i-950c0d5f0728",
    IMDb_rating: 3.8,
  },

  {
    name: "MS DHONI",
    release_date: "2026",
    poster:
      "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/old_images/MOVIE/3314/1770003314/1770003314-h",
    IMDb_rating: 5,
  },
];
fun(movies);

let filter = document.getElementById("filter");
filter.addEventListener("change", function () {
  let a = filter.value;

  if (a === "lth") {
    movies.sort(function (a, b) {
      return a.IMDb_rating - b.IMDb_rating;
    });
    fun(movies);
  }

  if (a === "htl") {
    movies.sort(function (a, b) {
      return b.IMDb_rating - a.IMDb_rating;
    });
    fun(movies);
  }
});

function fun(x) {
  document.getElementById("container").innerHTML = "";
  x.forEach(function (el) {
    let conatiner = document.getElementById("container");

    let div2 = document.createElement("div");

    let img2 = document.createElement("img");
    img2.src = el.poster;

    let name = document.createElement("h3");
    name.innerText = el.name;

    let date = document.createElement("h3");
    date.innerText = el.release_date;

    let rating = document.createElement("h3");
    rating.innerText = `IMDB: ${el.IMDb_rating}`;

    div2.append(img2, name, date, rating);

    conatiner.append(div2);
  });
}
