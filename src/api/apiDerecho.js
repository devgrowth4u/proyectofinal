import axios from "axios";

async function getDerecho() {
    try {
        const response = await axios({
            url: "http://desarrollo.ciudaddelnino.cl/ws_Ticket/api/Values" ,
            method: "GET",
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export default getDerecho;