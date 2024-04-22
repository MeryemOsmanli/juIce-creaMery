const cards = document.querySelectorAll(".card");
const cart = document.getElementById("cart");
const totalElement = document.getElementById("total");
const selectedItems = {};

function handleCardClick(event) {
  const card = event.currentTarget;
  const itemId = card.id;
  const itemName = card.querySelector("h2").textContent;
  const itemPrice = parseFloat(card.querySelector(".price").textContent);

  if (selectedItems[itemId]) {
    selectedItems[itemId].count++;
  } else {
    selectedItems[itemId] = {
      name: itemName,
      price: itemPrice,
      count: 1,
    };
  }

  updateCart();
}

function updateCart() {
  cart.innerHTML = "";
  let total = 0;

  for (const itemId in selectedItems) {
    const item = selectedItems[itemId];
    const listItem = document.createElement("li");
    const quantityContainer = document.createElement("div");
    const quantityText = document.createElement("span");
    const addButton = document.createElement("button");
    const subtractButton = document.createElement("button");

    addButton.textContent = "+";
    subtractButton.textContent = "-";
    subtractButton.style.padding = "5px 10px";
    subtractButton.style.margin = "5px ";
    subtractButton.style.border = "none";
    addButton.style.padding = "5px 10px";
    addButton.style.margin = "5px ";
    addButton.style.border = "none";

    quantityText.textContent = item.count;
    listItem.style.fontSize = "25px";
    listItem.style.fontStyle = "italic";

    addButton.addEventListener("click", () => {
      addItem(itemId);
    });

    subtractButton.addEventListener("click", () => {
      removeItem(itemId);
    });

    const hr = document.createElement("hr");

    quantityContainer.appendChild(subtractButton);
    quantityContainer.appendChild(quantityText);
    quantityContainer.appendChild(addButton);
    quantityContainer.appendChild(hr);

    listItem.textContent = `${item.name}-${item.price}$ sum: $${
      item.price * item.count
    }`;
    listItem.appendChild(quantityContainer);
    cart.appendChild(listItem);

    total += item.price * item.count;
  }

  totalElement.textContent = `total: $${total.toFixed(2)}`;
  totalElement.style.margin = "20px";
}

function addItem(itemId) {
  if (selectedItems[itemId]) {
    selectedItems[itemId].count++;
  }
  updateCart();
}

function removeItem(itemId) {
  if (selectedItems[itemId]) {
    selectedItems[itemId].count--;
    if (selectedItems[itemId].count <= 0) {
      delete selectedItems[itemId];
    }
  }
  updateCart();
}

cards.forEach((card) => {
  card.addEventListener("click", handleCardClick);
});

const modeToggle = document.getElementById("mode-toggle");
modeToggle.addEventListener("click", function () {
  const flavors_box_right = document.querySelector(".flavors_box_right");
  flavors_box_right.classList.toggle("dark-mode");
});

document.addEventListener("DOMContentLoaded", function () {
  const viewsCount = document.getElementById("viewsCount");
  const likesCount = document.getElementById("likesCount");
  const customersCount = document.getElementById("customersCount");

  const maxCount1 = 100;
  const maxCount2 = 200;
  const maxCount3 = 300;
  let currentCount = 0;

  const interval1 = setInterval(function () {
    if (currentCount >= maxCount1) {
      clearInterval(interval1);
    } else {
      currentCount++;
      viewsCount.textContent = currentCount;
    }
  }, 10);

  const interval2 = setInterval(function () {
    if (currentCount >= maxCount2) {
      clearInterval(interval2);
    } else {
      currentCount++;
      likesCount.textContent = currentCount;
    }
  }, 10);
  const interval3 = setInterval(function () {
    if (currentCount >= maxCount3) {
      clearInterval(interval3);
    } else {
      currentCount++;

      customersCount.textContent = currentCount;
    }
  }, 10);
});
