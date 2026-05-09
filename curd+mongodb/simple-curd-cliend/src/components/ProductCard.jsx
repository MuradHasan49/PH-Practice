"use client";

import { Card, Button } from "@heroui/react";
import Link from "next/link";

export default function ProductCard({ product, UserDelete }) {
    const { name, category, brand, _id } = product;
    const handleDelete = async (id) => {
        await UserDelete(id);
    }
    return (
        <div className="  ">
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
                </div>

                <div className="flex gap-3">
                    <Link href={`/products/${_id}`}>
                        <Button color="primary" className="flex-1">
                            Details
                        </Button>
                    </Link>
                    <Link href={`/products/${_id}/edit`}>
                        <Button variant="tertiary" className="flex-1">
                            Edit
                        </Button>
                    </Link>

                    <Button onClick={() => handleDelete(_id)} variant="danger" className="flex-1">
                        Delete
                    </Button>
                </div>
            </Card>
        </div>
    );
}