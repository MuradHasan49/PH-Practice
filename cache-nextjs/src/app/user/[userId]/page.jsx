import MoreDetails from "@/Components/ProductCard/MoreDetails";
export async function generateStaticParams() {
    const res = await fetch("http://localhost:5000/users")
    const data = await res.json()
    return data.slice(0,3).map(user => ({userId : user.id}) )
}


const UserDetails = async ({ params }) => {
    const { userId } = await params;
    const res = await fetch(`http://localhost:5000/users/${userId}`)
    const data = await res.json()
    return (
        <div>
            <MoreDetails key={data.id} data={data} />

        </div>
    )
}

export default UserDetails