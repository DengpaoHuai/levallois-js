const getData = async () => {
  try {
    const response = await fetch("https://swapi.dev/api/planets");
    const data = await response.json();
  } catch (error) {}

  console.log(data);
};

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
