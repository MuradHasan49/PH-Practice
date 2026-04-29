import ProduceCard from "@/Components/Card"
import ModalPage from "@/Components/ModalPage";
import { getData } from "@/lib/getData";
import { AddNewTask } from "@/lib/ServerAction";

const HomeContent = async () => {
    const data = await getData();
    console.log(data);
    return (
        <>
            <div className="">
                <h1 className="text-3xl font-bold text-center mt-8">Welcome to the Creator Hub</h1>
                <div className="flex items-center justify-center mt-2">
                    <ModalPage AddNewTask={AddNewTask} />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {
                    data.map((item,ind) => <ProduceCard key={ind} item={item} />)
                }
            </div>
        </>
    )
}

export default HomeContent