import { revalidatePath } from "next/cache";
import { setData } from "./getData";

export const AddNewTask = async (formData) => {
    "use server"
    const data = Object.fromEntries(formData.entries());
    console.log("Form submitted successfully!", data);
    setData(data);
    revalidatePath("/homepage");
}

