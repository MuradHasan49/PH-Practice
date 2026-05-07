"use client";
import { FloppyDisk } from "@gravity-ui/icons";
import {
    Button,
    Description,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";

const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch("http://localhost:8004/users", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    const result = await res.json()
    console.log(result.message)
    if (result.success) {
        alert(result.message)
        redirect("/")
    } else {
        alert("Failed to add data")
    }
}

const AddData = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[70vh] py-2">
            <Form className="w-full max-w-96 border border-gray-600 p-5 rounded-2xl" onSubmit={onSubmit}>

                <Fieldset>
                    <Fieldset.Legend>Profile Settings</Fieldset.Legend>
                    <Description>Update your profile information.</Description>

                    <FieldGroup>

                        {/* Name */}
                        <TextField
                            isRequired
                            name="name"
                            validate={(value) => {
                                if (value.length < 3) {
                                    return "Name must be at least 3 characters";
                                }
                                return null;
                            }}
                        >
                            <Label>Name</Label>
                            <Input placeholder="John Doe" />
                            <FieldError />
                        </TextField>

                        {/* Email */}
                        <TextField isRequired name="email" type="email">
                            <Label>Email</Label>
                            <Input placeholder="john@example.com" />
                            <FieldError />
                        </TextField>

                        {/* AGE FIELD (NEW) */}
                        <TextField isRequired name="age" type="number">
                            <Label>Age</Label>
                            <Input placeholder="Enter age" />
                            <FieldError />
                        </TextField>

                        {/* ROLE DROPDOWN (NEW) */}
                        <select
                            name="role"
                            className="w-full border rounded-md px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            defaultValue=""
                        >
                            <option value="">Select role</option>
                            <option value="Developer">Developer</option>
                            <option value="Designer">Designer</option>
                            <option value="Backend Developer">Backend Developer</option>
                            <option value="Frontend Developer">Frontend Developer</option>
                            <option value="Full Stack Developer">Full Stack Developer</option>
                        </select>

                    </FieldGroup>

                    {/* Actions */}
                    <Fieldset.Actions>
                        <Button type="submit">
                            <FloppyDisk />
                            Add new User
                        </Button>

                        <Button type="reset" variant="secondary">
                            Clear
                        </Button>
                    </Fieldset.Actions>

                </Fieldset>
            </Form>
        </div>
    )
}

export default AddData
