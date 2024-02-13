//console.log("js has been loaded");

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");

// "event name", callback function
menuBtn.addEventListener("click", function () {
  //console.log("clickedddd");
  mobileMenu.classList.add("active");
}); // end of menuBtn click

closeBtn.addEventListener("click", function () {
  //console.log("clickedddd");
  mobileMenu.classList.remove("active");
});

function renderProperties(properties) {
  properties.forEach((room) => {
    // create elements
    const roomArticle = document.createElement("article");
    roomArticle.classList.add("room");

    const roomNameElement = document.createElement("h3");
    roomNameElement.classList.add("room--name");
    roomNameElement.textContent = room.name;

    const roomDescriptionElement = document.createElement("p");
    roomDescriptionElement.classList.add("room--description");
    roomDescriptionElement.textContent = room.description;

    const roomPriceElement = document.createElement("p");
    roomPriceElement.textContent = `Price: ${room.price}`;

    const roomGuestsElement = document.createElement("p");
    roomGuestsElement.textContent = `Guests: ${room.guests}`;

    roomArticle.appendChild(roomNameElement);
    roomArticle.appendChild(roomDescriptionElement);
    roomArticle.appendChild(roomPriceElement);
    roomArticle.appendChild(roomGuestsElement);

    document.body.appendChild(roomArticle);
  }); // end of forEach
}

fetch("./js/properties.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data);
    renderProperties(data);
  });

fetch("/js/properties.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // Call renderProperties with the fetched data
    renderProperties(data);
  })
  .catch((error) => {
    console.error("There was a problem fetching the properties data:", error);
  });

// inside the .then() method
const cabins = data.filter((room) => {
  return room.type === "Cabin";
});
// instead of rendering all the properties, we'll render the filtered properties
renderProperties(cabins);
