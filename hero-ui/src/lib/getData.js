
import fackdata from "../data/fackdata.json"

export const getData = async () => {
    return fackdata;
}

export const setData= async (newTask) => {
    newTask.id === fackdata.length + 1;
    fackdata.unshift(newTask);
}
