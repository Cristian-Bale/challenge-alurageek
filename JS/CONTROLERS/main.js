import { servicesProducts } from "../SERVICES/PRODUCT-SERVICE.js";

const productoContainer = document.querySelector("[data-product]");
const form = document.querySelector("[data-form]");



function createCard(name, price, image, id) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <div class="img-container">
        <img src="${image}" alt="${name}">
    </div>
    <div class="card-container--info">
        <p>${name}</p>
        <div class="card-container--value">
            <p>${price}</p>
            <button class="delete-button" data-id="${id}">
                <img src="asset/delete-189.png" alt="Eliminar">
            </button>
        </div>
    </div>
    `;

 
    card.querySelector('.delete-button').addEventListener('click', async (event) => {
        const id = event.target.closest('button').dataset.id;
        await servicesProducts.deleteProducts(id);
        event.target.closest('.card').remove();
    });

    productoContainer.appendChild(card);
    return card;
}

const render = async () => {
    try {
        const listProducts = await servicesProducts.productlist();
        
        listProducts.forEach(product => {
            productoContainer.appendChild(
                createCard(product.name,
                    product.price,
                    product.image,
                    product.id)
            );
        });

    } catch (error) {
        console.log(error);
    }
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("Form submit event triggered");

    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    console.log(name);
    console.log(price);
    console.log(image);

    servicesProducts
        .createProducts(name, price, image)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

    console.log(error)
});



render();


