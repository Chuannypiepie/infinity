/** @format */

import { def } from "@vue/shared";
import axios from "axios";
const baseURL = "http://175.178.239.209:9090/";

const getSpecial = () => axios.get(baseURL+"special").then((res) => res.data);
const getRoles = () => axios.get(baseURL+"roles").then((res) => res.data);
export{
    getSpecial,getRoles
}
