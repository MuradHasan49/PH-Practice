import ProduceCard from "@/Components/Card"
import { getData } from "@/lib/getData";

const HomeContent = async () => {
    const data = await getData();
    console.log(data);
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {
                    data.map(item => <ProduceCard key={item.id} item={item} />)
                }
            </div>
        </>
    )
}

export default HomeContent