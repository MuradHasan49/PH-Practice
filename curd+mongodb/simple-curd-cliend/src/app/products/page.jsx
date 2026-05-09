
import AddNewProduc from "@/components/AddNewProduc";
import ProductCard from "@/components/ProductCard";
import { addProduct, UserDelete } from "@/lib/actions";
import { getProducts } from "@/lib/data";
import Link from "next/link";


const ProductsPage = async () => {
    const products = await getProducts();
    console.log(products);
    return (
        <>
            <div className="flex items-center justify-between container mx-auto">

                <h1 className="text-5xl font-bold  my-6">Total Products: {products.length}</h1>
              <AddNewProduc CreateNewProduct={addProduct} />
            </div>
            <div className="grid grid-cols-3 gap-4 container mx-auto">

                {
                    products.map((product) => (<ProductCard key={product._id} product={product} UserDelete={UserDelete} />
                    ))
                }
            </div>
        </>
    )
}

export default ProductsPage
