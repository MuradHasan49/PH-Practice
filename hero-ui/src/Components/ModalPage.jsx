"use client";
import { CirclePlus } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField, ListBox, Select, FieldError } from "@heroui/react";

const ModalPage = ({ AddNewTask }) => {
    return (
        <Modal>
            <Button variant="secondary">Add new Task <CirclePlus /></Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <CirclePlus className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Fill this form</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form action={AddNewTask} className="flex flex-col gap-4">
                                    <TextField isRequired className="w-full" >
                                        <Label>Name</Label>
                                        <Input name="name" type="text" placeholder="Enter your name" />
                                    </TextField>
                                    <TextField
                                        isRequired
                                        name="email"
                                        type="email"
                                        validate={(value) => {
                                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                                return "Please enter a valid email address";
                                            }
                                            return null;
                                        }}
                                        className="w-full"
                                    >
                                        <Label>Email</Label>
                                        <Input placeholder="Enter your email" />
                                         <FieldError />
                                    </TextField>
                                    <TextField isRequired className="w-full" name="role" type="text" >
                                        <Label>Role</Label>
                                        <Input placeholder="Enter your Role" />
                                    </TextField>
                                    <Select className="" name="status" placeholder="Select one">
                                        <Label>State</Label>
                                        <Select.Trigger>
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>
                                        <Select.Popover>
                                            <ListBox>
                                                <ListBox.Item id="pending" textValue="Pending">
                                                    Pending
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="inactive" textValue="Inactive">
                                                    Inactive
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="active" textValue="Active">
                                                    Active
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                            </ListBox>
                                        </Select.Popover>
                                    </Select>
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit">Submit Form</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    )
}

export default ModalPage