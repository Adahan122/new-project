function fetchData(api) {
  return fetch(api)
    .then((response) => response.json())
    .then((data) => data.filter((item) => item.like == true))
    .catch((error) => console.error("Ошибка", error));
}

function renderNews(data) {
  let newWrapper = document.querySelector(".main__menu");
  newWrapper.innerHTML = data
    .map((item) => {
      return `
      <div class="main__content-card">
      <div class="main__block1">
        <img class="main__img" src="${item.image}" alt="" />
        <div class="main__card-info">
          <div class="main__data">
            <h4 class="main__menu-title">${item.date}</h4>
            <img class='main__like vector-like' src=${
              item.like ? "../image/heart(1).svg" : "../image/heart.svg"
            } data-news-id="${item.id}" data-like=${
        item.heart ? "true" : "false"
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
              <img src="../image/share-2.svg" class="main__shaire" alt="" />
            </a>
        </div>
      </div>
    </div>
    `;
    })
    .join(" ");
}

fetchData("https://7320a1389b9e3024.mokky.dev/news-code").then((response) => {
  renderNews(response);
});
// Burger

let burger = document.querySelector(".header__burger");
let burgerCard = document.querySelector(".header__burger-card");

burger.addEventListener("click", function () {
  burgerCard.classList.toggle("open");
  burger.classList.toggle("active");
  // burger.classList.toggle("open");
});

// let card = document.querySelector(".filter-card");
// let filter = document.querySelector(".filter-img");

// // filter.addEventListener("click", function () {
// //   card.classList.toggle("open-card");
// // });
// filter.onclick = function () {
//   card.classList.toggle("open-card");
// };
