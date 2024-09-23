const getData = async () => {
  const response = await fetch("https://crudcrud.com/api//vg");
  const data = await response.json();
  const container = document.querySelector("#vg");
  data.forEach((vg) => {
    console.log(vg.name);
    const p = document.createElement("p");
    p.innerText = vg.name;
    container.appendChild(p);
  });
};

getData();

const id = 50;

const deleteItem = (id, event) => {
  console.log(id);
  console.log(event);
};

document.getElementById("demo").onclick = (event) => deleteItem(id, event);
