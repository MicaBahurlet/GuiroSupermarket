const containerProducts = document.querySelector(".containerProducts");

const createProductTemplate = (producto) => {
    return `
        <div class="productCard">
            <img src="${producto.img}" alt="${producto.name}">
            <h3>${producto.name}</h3>
            <p>$${producto.price}</p>
            <p>Stock disponible: ${producto.stock}</p>
            <input type="number" min="0" max="${producto.stock}" value="0" id="quantity-${producto.id}" class="quantityInput">
            <button class="btnComprarProduct"
                data-id="${producto.id}"
                data-name="${producto.name}"
                data-price="${producto.price}"
                data-stock="${producto.stock}"
            >Comprar</button>
        </div>
    `;
};

const renderProducts = (productsList) => {
    containerProducts.innerHTML = productsList.map(createProductTemplate).join("");
};

// Renderizo los productos al cargar la página
renderProducts(listaProducts);

// Manejar la compra 
containerProducts.addEventListener("click", (e) => {
    if (e.target.classList.contains("btnComprarProduct")) {
        const productId = e.target.dataset.id;
        const productName = e.target.dataset.name;
        const productPrice = e.target.dataset.price;
        const productStock = e.target.dataset.stock;
        const quantityInput = document.getElementById(`quantity-${productId}`);

        const quantity = parseInt(quantityInput.value);

        if (isNaN(quantity) || quantity <= 0) {
            alert("Debes seleccionar la cantidad de producto antes de comprar.");
        } else if (quantity > productStock) {
            alert("Cantidad no válida. Por favor tené en cuenta el stock disponible.");
        } else {
            const totalPrice = productPrice * quantity;
            alert(`Excelente, compraste ${quantity} de ${productName}. El total es $${totalPrice}.`);
        }
    }
});


