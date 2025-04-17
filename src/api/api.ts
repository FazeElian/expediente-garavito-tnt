import { isAxiosError } from "axios";

// Axios config
import api from "./config";

// Type
import { Story } from "../types/type";

export async function getAllStories () {
    try {
        const { data } = await api.get<Story[]>("/stories");
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw new Error("Error getting stories.")
    }
}