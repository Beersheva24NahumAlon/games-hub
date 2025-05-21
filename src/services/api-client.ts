import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "db369293ff8f45d98c35a334af45d90c",
    }
});