function fetchData(api) {
  return fetch(api)
    .then((response) => response.json())
    .catch((error) => console.error("Ошибка", error));
}

function renderNews(data) {
  let newWrapper = document.querySelector(".main__menu");
  newWrapper.innerHTML = data
    .map((item) => {
      return `
      <div class="main__content-card">
      <div class="main__block1" id='card'>
        <img class="main__img" src="${item.image}" alt="" />
        <div class="main__card-info">
          <div class="main__data">
            <h4 class="main__menu-title">${item.date}</h4>
            <img class='main__like vector-like' src=${
              item.like ? "./image/heart.svg" : "./image/heart(1).svg"
            } data-news-id="${item.id}" data-is-like=${
        item.like ? "false" : "true"
      } alt="" />
          </div>
          <h4 class="main__menu-news">${item.title}</h4>
          <span class="main__menu-span"
            >${item.text}</span
          >
          <div class="main__shaire-link">
            <a href="./read.html">Читать дальше</a>
          </div>
          <a href="">
              <img src="image/share-2.svg" class="main__shaire" alt="" />
            </a>
        </div>
      </div>
    </div>
    `;
    })
    .join(" ");
}

document.addEventListener("click", function (event) {
  let target = event.target;
  if (target.classList.contains("vector-like")) {
    let newsId = target.dataset.newsId;
    let dataLike = target.dataset.isLike === "true";
    fetch(`https://7320a1389b9e3024.mokky.dev/news-code/${newsId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ like: !dataLike }),
    })
      .then((response) => response.json())
      .then((data) => {
        target.dataset.dataLike = String(!dataLike);
        target.setAttribute(
          "src",
          `${dataLike ? "./image/heart.svg" : "./image/heart(1).svg"}`
        );
      })
      .catch((error) => console.log("Ошибка", error));
  }
});

fetchData("https://7320a1389b9e3024.mokky.dev/news-code").then((data) => {
  renderNews(data);
});

// Burger

let burger = document.querySelector(".header__burger");
let burgerCard = document.querySelector(".header__burger-card");

burger.addEventListener("click", function () {
  burgerCard.classList.toggle("open");
  burgerCard.style.transition = "1s";
  this.classList.toggle("active");
  // burger.classList.toggle("open");
});

let card = document.querySelector(".filter-card");
let filter = document.querySelector(".filter-img");

filter.addEventListener("click", function () {
  card.classList.toggle("open-card");
});

let checkBox = document.querySelectorAll(".main__check");
let mainBtn = document.querySelector(".main__btn");
mainBtn.addEventListener("click", (event) => {
  let mainMenu = document.querySelector(".main__menu");
  mainMenu.style.display = "none";
});
