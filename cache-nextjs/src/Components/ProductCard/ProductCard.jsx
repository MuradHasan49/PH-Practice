import Link from 'next/link';

const ProductCard = ({ item }) => {
    const { name, price, description, category, id } = item;
    return (
        <div className="card bg-purple-600 shadow-sm" >
            <div className="card-body">
                <span className="badge badge-xs badge-warning">{category}</span>
                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">{name}</h2>
                    <span className="text-xl">{price}</span>
                </div>
                <div className="">
                    <p>{description}</p>
                </div>
                <div className="mt-6">
                    <Link href={`/user/${id}`}>
                        <button className="btn btn-primary btn-block">Show More Details</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard