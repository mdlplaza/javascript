let items = [
	{
		name: "brocha",
		price: "5",
		amount: 0,
	},
	{
		name: "llave",
		price: "2",
		amount: 0,
	},
	{
		name: "martillo",
		price: "10",
		amount: 0,
	},
	{
		name: "tronco",
		price: "20",
		amount: 0,
	}
];

showCart();
showProducts();

function showProducts() {
	let container = document.getElementById("container");
	for (let i = 0; i < items.length; i++) {
		let contenido = `<div>
		<h5>${items[i].name}</h5>
		<p>${items[i].price} euros</p>
		<button onclick="addItems('${items[i].name}')">Añadir</button>
		<button onclick="removeItems('${items[i].name}')">Quitar</button>
	</div>`;

		container.innerHTML += contenido;
	}

}

function showCart() {
	let carrito = document.getElementById("carrito");
	let cartContent = "";
	for (let i = 0; i < items.length; i++) {
		cartContent += `<li>${items[i].name}:${items[i].amount}</li>`;
	}
	carrito.innerHTML = cartContent;
}

function addItems(product) {
	console.log(product);
	for (let i = 0; i < items.length; i++) {
		if (items[i].name === product) {
			items[i].amount += 1;
		}
	}
	showCart();
}

function removeItems(product) {
	console.log(product);
	for (let i = 0; i < items.length; i++) {
		if (items[i].name === product) {
			items[i].amount -= 1;
		}
	}
	showCart();
}
