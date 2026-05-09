export const getProducts = async () => {
    const res = await fetch("http://localhost:5005/products");
    return res.json();
}

export const getProductById = async (productId) => {
    const res = await fetch(`http://localhost:5005/products/${productId}`);
    return res.json();
}