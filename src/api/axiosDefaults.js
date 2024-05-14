import axios from "axios";

axios.defaults.baseURL = "https://pp5-backend-drf-the-winding-path.onrender.com";
// axios.defaults.baseURL = "postgres://windingpathdb_owner:Upd6SGCy4rYw@ep-spring-term-a22ni9dt.eu-central-1.aws.neon.tech/thewindingpathdb?sslmode=require";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();