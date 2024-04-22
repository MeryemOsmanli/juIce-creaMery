var navbtn = document.querySelector(".navbtn");
var hamburgerMenu = document.querySelector(".hamburger-menu ");
navbtn.onclick = () => hamburgerMenu.classList.toggle("active");

const team_contain = document.querySelector(".team_contain");

async function getAllCard() {
  const res = await fetch("http://localhost:3000/products");
  const data = await res.json();
  return data;
}

function createCard(id, image, price, category) {
  const card = document.createElement("div");
  const img = document.createElement("img");
  const cardprice = document.createElement("p");
  const cardcategory = document.createElement("p");
  //   const cardtitle = document.createElement("h3");
  //   const cardrating = document.createElement("p");
  //   const carddescription = document.createElement("p");
  //   const a = document.createElement("a");

  card.classList.add("cardDiv");
  cardprice.classList.add("cardPrice");
  cardcategory.classList.add("cardCategory");
  //   cardtitle.classList.add("cardTitle");
  //   cardrating.classList.add("cardRating");

  img.src = image;
  //   a.href = `http://127.0.0.1:5500/week7/day2/detail.html?id=${id}`;

  cardprice.textContent = price;
  cardcategory.textContent = category;
  //   cardtitle.textContent = title;
  // cardrating.textContent = `Rating: ${rating.rate} (${rating.count} reviews)`;
  // carddescription.textContent = description;

  //   a.append(carddescription);
  card.append(img, cardprice, cardcategory);
  team_contain.appendChild(card);
}

async function generateCard() {
  const data = await getAllCard();
  data.forEach((element) =>
    createCard(
      element.id,
      element.image,
      element.price,
      element.category
      //   element.description,
      //   element.rating,
      //   element.title
    )
  );
  console.log(data);
}

generateCard();
