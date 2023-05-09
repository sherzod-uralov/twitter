import axios from "axios";

export async function fetchData(url,option,setState){
    const response = await axios.get(url,option);
    setState(response)
}