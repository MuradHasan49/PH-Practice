"use client";

import { Card, Button } from "@heroui/react";
import Link from "next/link";

export default function ProductDetails({ product, }) {
    const { name, category, brand, price, } = product;

    return (
        <div className=" w-4xl mx-auto my-10">
            <Card className="p-6 shadow-xl rounded-2xl space-y-5">
                <div>
                    <h2 className="text-2xl font-bold">{name}</h2>

                    <p className="text-gray-500">{category}</p>
                </div>
                <div className="space-y-2">
                    <p>
                        <span className="font-semibold">Brand:</span>{" "}
                        {brand}
                    </p>
                    <p>
                        <span className="font-semibold">Price:</span> $
                        {price}
                    </p>
                </div>

                <div className="flex gap-3">
                    <Link href={"/products"}>
                        <Button variant="primary" className="flex-1">
                            Back Into Products
                        </Button>
                    </Link>

                    <Button variant="danger" className="flex-1">
                        Add To Card
                    </Button>
                </div>
            </Card>
        </div>
    );
}