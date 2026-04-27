
const MoreDetails = ({data}) => {
    const { name , phone, email ,role } = data
    return (
        <div className="card bg-purple-600 shadow-sm w-xl mx-auto mt-8" >
            <div className="card-body">
                <span className="badge badge-xs badge-warning">{role}</span>
                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">{name}</h2>
                    <span className="text-xl">{email}</span>
                </div>
                <div className="">
                    <p>{phone}</p>
                </div>
            </div>
        </div>
    )
}

export default MoreDetails