import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export const addProduct = async (formData) => {
    "use server";
    const newProduct = Object.fromEntries(formData.entries());
    console.log(newProduct);

    const res = await fetch("http://localhost:5005/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
    })
    const data = await res.json();
    if (data.insertedId) {
        revalidatePath("/products");
    }
    return data;

}

export const updateProduct = async (productId,formData) => {
    "use server";
    const updatedProduct = Object.fromEntries(formData.entries());
    const res = await fetch(`http://localhost:5005/products/${productId}/edit`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
    })
    const data = await res.json();
    if (data.modifiedCount > 0) {
        revalidatePath("/products");
        redirect(`/products`)
    }
    return data;
}

export const UserDelete = async (userId) => {
    "use server";
    const res = await fetch(`http://localhost:5005/products/${userId}`, {
        method: "DELETE",
    });
    const data = await res.json();
    if (data.deletedCount > 0) {
        revalidatePath("/products");
    }
    return data;
}