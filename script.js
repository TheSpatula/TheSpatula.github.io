function calculate() {
  const pizzas = Number(document.getElementById("pizzas").value);

  const ingredients = [
    { name: "Durum wheat semolina", value: pizzas * 50, unit: "g" },
    { name: "Pizza flour", value: pizzas * 135, unit: "g" },
    { name: "Water", value: pizzas * 110, unit: "ml" },
    { name: "Olive oil", value: pizzas * 12, unit: "ml" },
    { name: "Salt", value: pizzas * 3.5, unit: "g" },
    { name: "Yeast", value: pizzas * 2.5, unit: "g" }
  ];

  const list = document.getElementById("ingredients");
  list.innerHTML = "";

  ingredients.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.name}</span>
      <span>${item.value % 1 === 0 ? item.value : item.value.toFixed(1)} ${item.unit}</span>
    `;
    list.appendChild(li);
  });

  document.getElementById("result").classList.remove("hidden");
}