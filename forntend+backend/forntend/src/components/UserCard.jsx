
const UserCard = ({ user }) => {
    const { name, email, age, role } = user;
    return (
        <div className=" rounded-2xl shadow-xl border border-gray-200 overflow-hidden">

            {/* Header */}
            <div className="bg-linear-to-r from-blue-500 to-purple-500 p-4">
                <h2 className="text-lg font-bold uppercase">{user.name}</h2>
            </div>

            {/* Body */}
            <div className="p-5 space-y-3">
                <p><span className="font-semibold">Email:</span> {email}</p>
                <p><span className="font-semibold">Age:</span> {age}</p>
                <p><span className="font-semibold">Role:</span> {role}</p>

                <span className="inline-block mt-2 bg-gray-300 text-blue-600 px-3 py-1 rounded-full text-sm">
                    Active User
                </span>
            </div>
        </div>
    );
};

export default UserCard;