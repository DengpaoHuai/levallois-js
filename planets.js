const getData = async () => {
  try {
    const response = await fetch("https://swapi.dev/api/planets");
    const data = await response.json();
    const container = document.querySelector("#planets");
    data.results.forEach((planet) => {
      console.log(planet.name);
      const p = document.createElement("p");
      p.innerText = planet.name;
      container.appendChild(p);
    });
  } catch (error) {}
};

getData();
