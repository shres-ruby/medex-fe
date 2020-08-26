import axios from "axios";
import { base } from "./constants";

export const authAxios = axios.create({
    baseURL : base,
});