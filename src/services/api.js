import axios from "axios";

// http://viacep.com.br/ws/01001000/json/

const api = axios.create({
    baseURL: "http://viacep.com.br/ws/"
});

export default api;