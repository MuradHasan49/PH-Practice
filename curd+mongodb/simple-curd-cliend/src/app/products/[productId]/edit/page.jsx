import { updateProduct } from "@/lib/actions";
import { getProductById } from "@/lib/data";
import { FloppyDisk } from "@gravity-ui/icons"
import { Button, Input, Label, TextField } from "@heroui/react"

const EditPage = async ({ params }) => {
    const { productId } = await params;
    const product = await getProductById(productId);
    const handleUpdate = async (formData) => {
        "use server";
        await updateProduct(productId, formData);
    }
    console.log(product);
    return (
        <div className="w-1/2 mx-auto mt-50">
            <form action={handleUpdate} className="flex flex-col gap-4 ">

                {/* Product Name */}
                <TextField name="name" defaultValue={product?.name}>
                    <Label>Product Name</Label>
                    <Input placeholder="AMD Ryzen 5 7600" className="border border-gray-500 rounded-md" />
                </TextField>

                {/* Category */}
                <div className="flex flex-col gap-1">
                    <Label>Category</Label>
                    <select
                        name="category"
                        className="w-full rounded-md px-3 py-2 bg-gray-950 border border-gray-500 text-gray-400"
                        defaultValue={product?.category || ""}
                    >
                        <option value="">Select Category</option>
                        <option value="CPU">CPU</option>
                        <option value="GPU">GPU</option>
                        <option value="RAM">RAM</option>
                        <option value="SSD">SSD</option>
                        <option value="Motherboard">Motherboard</option>
                        <option value="Power Supply">Power Supply</option>
                        <option value="PC Case">PC Case</option>
                    </select>
                </div>

                {/* Brand */}
                <TextField name="brand" defaultValue={product?.brand}>
                    <Label>Brand</Label>
                    <Input placeholder="AMD" className="border border-gray-500 rounded-md" />
                </TextField>

                {/* Price */}
                <TextField name="price" type="number" defaultValue={product?.price}>
                    <Label>Price</Label>
                    <Input placeholder="229" className="border border-gray-500 rounded-md" />
                </TextField>

                {/* Actions */}
                <div className="flex justify-end gap-3 pt-2">
                    <Button variant="secondary" slot="close">
                        Cancel
                    </Button>

                    <Button type="submit" slot="close">
                        <FloppyDisk />
                        Update Product
                    </Button>
                </div>

            </form>
        </div>
    )
}

export default EditPage
