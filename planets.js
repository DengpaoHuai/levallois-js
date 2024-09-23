const getData = async () => {
  try {
    const response = await fetch("https://swapi.dev/api/planets");
    const data = await response.json();
    console.log(data);
  } catch (error) {}
};

getData();
