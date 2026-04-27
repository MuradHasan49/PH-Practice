import React from 'react'

const ProductCard = ({item}) => {
    const {name,price, description,category} = item;
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
                    <button className="btn btn-primary btn-block">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard