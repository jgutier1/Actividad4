const products = [
    {
        name: 'Bicicleta montaña',
        image: './src/assets/png/Bicicleta.jpg', // modificar por la ruta donde guarden sus
        price: 200,
        quantity: 2,
    },
    {
        name: 'Iphone 7',
        image: './src/assets/png/iphone7.png', // modificar por la ruta donde guarden sus 
        price: 500,
        quantity: 4,
    },
    {
        name: 'Gafas de sol',
        image: './src/assets/png/gafassol.jpg', // modificar por la ruta donde guarden sus 
        price: 100,
        quantity: 6,
    },
    {
        name: 'Juego comedor',
        image: './src/assets/png/comedor.jpg', // modificar por la ruta donde guarden sus 
        price: 320,
        quantity: 1,
    }
];


const displayProducts = () =>{
    const productsTable = document.getElementById("productsTable");

    products.forEach((product) => {
        productsTable.innerHTML +=
        `
        <tr class="products">
            <td><img src="${product.image}" alt="${product.name}" /></td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.quantity}</td>
            <td>$${product.price * product.quantity}</td>
        </tr>
        `;
    })
}

displayProducts();