
import DeshboardCard from "@/Components/DeshboardCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const DeshboardPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user;
    console.log(user)
    if (!user) {
        return <div>Unauthorized. Please SignIn to access the Deshboard.</div>
    }

    return (
        <DeshboardCard/>
    )
}

export default DeshboardPage