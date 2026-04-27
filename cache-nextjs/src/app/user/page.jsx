import ProductCard from "@/Components/ProductCard/ProductCard"


const UserPage = async() => {
    const res = await fetch("http://localhost:5000/users")
    const data = await res.json()
    return (
        <div className="grid grid-cols-4 gap-5 p-5">
        {
            data.map(item => <ProductCard key={item.id} item={item}/>)
        }
         </div>
    )
}

export default UserPage