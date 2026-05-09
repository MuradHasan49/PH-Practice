"use client";
import { Envelope, FloppyDisk, Plus } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const AddNewProduc = ({ CreateNewProduct }) => {
    return (
        <div>
            <Modal>
                <Button variant="secondary">
                    <Plus />
                    Add New Products
                </Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                    <Envelope className="size-5" />
                                </Modal.Icon>
                                <Modal.Heading>Contact Us</Modal.Heading>
                                <p className="mt-1.5 text-sm leading-5 text-muted">
                                    Fill out the form below and we'll get back to you. The modal adapts automatically
                                    when the keyboard appears on mobile.
                                </p>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default" className="p-4 rounded-xl">
                                    <form action={CreateNewProduct} className="flex flex-col gap-4">

                                        {/* Product Name */}
                                        <TextField name="name">
                                            <Label>Product Name</Label>
                                            <Input placeholder="AMD Ryzen 5 7600" className="border border-gray-500 rounded-md" />
                                        </TextField>

                                        {/* Category */}
                                        <div className="flex flex-col gap-1">
                                            <Label>Category</Label>
                                            <select
                                                name="category"
                                                className="w-full rounded-md px-3 py-2 bg-gray-950 border border-gray-500 text-gray-400"
                                                defaultValue=""
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
                                        <TextField name="brand" >
                                            <Label>Brand</Label>
                                            <Input placeholder="AMD" className="border border-gray-500 rounded-md" />
                                        </TextField>

                                        {/* Price */}
                                        <TextField name="price" type="number">
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
                                                Add Product
                                            </Button>
                                        </div>

                                    </form>
                                </Surface>
                            </Modal.Body>

                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    )
}

export default AddNewProduc
