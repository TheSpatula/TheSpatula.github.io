function calculate() {
  const pizzas = Number(document.getElementById("pizzas").value);

  const ingredients = [
    { name: "Flour", value: pizzas * 100, unit: "g" },
    { name: "Water", value: pizzas * 60, unit: "g" },
    { name: "Salt", value: pizzas * 2, unit: "g" },
    { name: "Yeast", value: pizzas * 1, unit: "g" }
  ];

  const list = document.getElementById("ingredients");
  list.innerHTML = "";

  ingredients.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.name}</span>
      <span>${item.value} ${item.unit}</span>
    `;
    list.appendChild(li);
  });

  document.getElementById("result").classList.remove("hidden");
}
