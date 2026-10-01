let cart = [];

function addProduct(product) {
    cart = [...cart, product];
}

function removeProduct(id) {
    const product = cart.find(item => item.id === id);

    if (!product) {
        throw new Error("Produsul nu există în coș.");
    }

    cart = cart.filter(item => item.id !== id);
}

function updateQuantity(id, quantity) {
    cart = cart.map(item =>
        item.id === id
            ? { ...item, quantity: quantity }
            : item
    );
}

function calculateTotal() {
    return cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
}

addProduct({
    id: 1,
    name: "Cafea",
    price: 40,
    quantity: 2
});

addProduct({
    id: 2,
    name: "Cappuccino",
    price: 50,
    quantity: 1
});

console.log("Produsele din coș:");

cart.forEach(({ name, price, quantity }) => {
    console.log(`${name} - ${price} lei x ${quantity}`);
});

console.log(`Total: ${calculateTotal()} lei`);

updateQuantity(1, 3);

console.log("După modificarea cantității:");
console.log(cart);

try {
    removeProduct(5);
} catch (error) {
    console.log(`Eroare: ${error.message}`);
}