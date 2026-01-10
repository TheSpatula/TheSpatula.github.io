function calculate() {
    const pizzas = document.getElementById("pizzas").value;

    const flour = pizzas * 100;
    const water = pizzas * 60;
    const salt = pizzas * 2;
    const yeast = pizzas * 1;

    document.getElementById("result").innerHTML =  `
    <h2>Ingredients</h2>
    <p>Flour: ${flour} g</p>
    <p>Water: ${water} g</p>
    <p>Salt: ${salt} g</p>
    <p>Yeast: ${yeast} g</p>
  `;
}