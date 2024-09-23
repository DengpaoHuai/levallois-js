const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const vg_form = new FormData(form);
  const name = vg_form.get("name");
  const editor = vg_form.get("editor");
  const platform = vg_form.get("platform");
  const release_date = vg_form.get("release_date");
  fetch("https://crudcrud.com/api//vg", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      editor,
      platform,
      release_date,
    }),
  }).then((response) => {
    response
      .json()
      .then((data) => {
        console.log(data);
        window.location.href = "GV_list.html";
      })
      .catch((error) => console.log(error));
  });

  /*
  const name = document.querySelector("input[name='editor']").value;
  console.log(name);*/
  /*
  const name = document.forms.vg_form.editor.value;
  console.log(name);*/
});
