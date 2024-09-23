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

  console.log(data);
};

/*
const getData1 = () => {
    return new Promise((resolve, reject) => {
        fetch("https://swapi.dev/api/planets")
        .then((response) => {
            resolve(response.json());
        })
        .catch((error) => {
            reject(error);
        });
    })
}

*/

//getData();

console.log("toto");
/*
fetch("https://swapi.dev/api/planets").then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
});*/

loader = true;

fetch("https://swapi.dev/api/planets")
  .then((response) => response.json())
  .then((toto) => {
    console.log(toto);
  })
  .catch((error) => console.log(error))
  .finally(() => (loader = false));
