import axios from "axios";

const fetchData = async (url) => {
    const { data } = await axios(`https://rmc.uwdev.ru/api/${url}`);
    console.log(data);
    return {
        data
    }
}
export default fetchData;