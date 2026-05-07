import UserCard from "./UserCard"

const UserData = async () => {
    const res = await fetch("http://localhost:8004/users")
    const data = await res.json()
    console.log(data)
    return (
        <div className="container mx-auto">
         
            <h1 className="text-center text-5xl py-6 text-gray-400">Total User Data - {data.length} </h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    data.map(user => <UserCard key={user.id} user={user} />)
                    
                }
            </div>
        </div>
    )
}

export default UserData
