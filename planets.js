let planetResponse = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

const nextButton = document.getElementById("nextButton");
const previousButton = document.getElementById("backButton");
const loader = document.getElementById("loader");

const container = document.querySelector("#planets");

const getData = async (url) => {
  loader.style.display = "block";
  nextButton.disabled = true;
  previousButton.disabled = true;
  container.innerHTML = "";
  try {
    const response = await fetch(url);
    const data = await response.json();
    loader.style.display = "none";
    planetResponse = data;
    if (data.next) {
      nextButton.disabled = false;
    }
    if (data.previous) {
      previousButton.disabled = false;
    }
    data.results.forEach((planet) => {
      console.log(planet.name);
      const p = document.createElement("p");
      p.innerText = planet.name;
      container.appendChild(p);
    });
  } catch (error) {}
};

getData("https://swapi.dev/api/planets");

const previousPage = () => {
  if (planetResponse.previous) {
    getData(planetResponse.previous);
  }
};

nextButton.addEventListener("click", () => {
  if (planetResponse.next) {
    getData(planetResponse.next);
  }
});

document.getElementById("searchForm").addEventListener("submit", (e) => {
  console.log(e);
  e.preventDefault();
});
