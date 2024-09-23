const getData = async () => {
  const response = await fetch(
    "https://crudcrud.com/api/3f31560fd0a0437d8310c505226cecde/vg"
  );
  const data = await response.json();
  const container = document.querySelector("#vg");
  data.forEach((vg) => {
    const div = document.createElement("div");
    div.id = vg._id;
    console.log(vg.name);
    const p = document.createElement("p");
    p.innerText = vg.name;
    div.appendChild(p);
    const button = document.createElement("button");
    button.innerText = "Delete";
    button.onclick = () => deleteItem(vg._id);
    div.appendChild(button);
    div.style.display = "flex";
    div.style.flexDirection = "row";
    div.style.justifyContent = "space-between";
    container.appendChild(div);
  });
};

getData();

const id = 50;

document.getElementById("demo").onclick = (event) => deleteItem(id, event);

const deleteItem = async (id) => {
  await fetch(
    "https://crudcrud.com/api/3f31560fd0a0437d8310c505226cecde/vg/" + id,
    {
      method: "DELETE",
    }
  );
  const elementToSupprimer = document.getElementById(id);
  elementToSupprimer.remove();
};
