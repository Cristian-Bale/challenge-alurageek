const productlist = () => {
    return fetch("http://localhost:3000/productos")
        .then((respuesta) => respuesta.json())
        .catch((error) => console.log(error));
};

const createProducts = (name, price, image) => {
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            price,
            image,
        })
    }).then((res) => res.json())
        .catch((err) => console.log(err));
};

const deleteProducts = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/productos/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

export const servicesProducts = {
    productlist,
    createProducts,
    deleteProducts
};
