import ProductCard from "@/Components/ProductCard/ProductCard"

const getdata = async () => {
    // const res = await fetch("http://localhost:5000/components", { cache: "force-cache" })
    const res = await fetch("http://localhost:5000/components", { next: { revalidate: 100 } })
    return res.json()

}

const Product = async () => {
    const data = await getdata()
    console.log(data)

    return (
        <>
            <div className="grid grid-cols-4 gap-4 p-5">
                {
                    data.map(item => <ProductCard key={item.id} item={item} />)
                }
            </div>
        </>

    );
}

export default Product;