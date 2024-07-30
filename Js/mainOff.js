
// Productos en off
const containerProductsOff = document.querySelector(".containerProductsOff");

const createProductTemplateOff = (producto) => {
    return `
        <div class="productCard">
            <img src="${producto.img}" alt="${producto.name}">
            <h3>${producto.name}</h3>
            <p>$${producto.price}</p>
            <p id="stock-${producto.id}">Stock disponible: ${producto.stock}</p>
            <input type="number" min="0" max="${producto.stock}" value="0" id="quantity-off-${producto.id}" class="quantityInput">
            <button class="btnComprarProductOff"
                data-id="${producto.id}"
                data-name="${producto.name}"
                data-price="${producto.price}"
                data-stock="${producto.stock}"
            >Comprar</button>
        </div>
    `;
};

const renderProductsOff = (productsList) => {
    containerProductsOff.innerHTML = productsList.map(createProductTemplateOff).join("");
};

// Renderizo productos al cargar la página
renderProductsOff(listaProductsOff);

// Manejar compra con los alerts
containerProductsOff.addEventListener("click", (e) => {
    if (e.target.classList.contains("btnComprarProductOff")) {
        const productId = e.target.dataset.id;
        const productName = e.target.dataset.name;
        const productPrice = parseInt(e.target.dataset.price); 
        let productStock = parseInt(e.target.dataset.stock); 
        const quantityInput = document.getElementById(`quantity-off-${productId}`);
        const quantity = parseInt(quantityInput.value);

        if (isNaN(quantity) || quantity <= 0) {
            alert("Debes seleccionar la cantidad de producto antes de comprar. Aprovechá los descuentos");
        } else if (quantity > productStock) {
            alert("Cantidad no válida. Por favor tené en cuenta el stock disponible.");
        } else {

            const product = listaProductsOff.find(p => p.id === parseInt(productId));
            if (product) {
                product.stock -= quantity;
                productStock = product.stock; 
            }


            const stockElement = document.getElementById(`stock-${productId}`);
            stockElement.textContent = `Stock disponible: ${productStock}`;


            const totalPrice = productPrice * quantity;
            alert(`Has comprado ${quantity} de ${productName}. El total es $${totalPrice}.`);
        }
    }
});
