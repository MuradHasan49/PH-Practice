import ProductDetails from "@/components/ProductDetails";
import { getProductById } from "@/lib/data";

const ProductDetailsPage = async ({ params }) => {
    const { productId } = await params;
    const product = await getProductById(productId);
    
    return (
        <div>
            <ProductDetails product={product} />
        </div>
    )
}

export default ProductDetailsPage
