import { isAxiosError } from "axios";

// Axios config
import api from "./config";

// Type
import { Story, StoryForm } from "../types/type";

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

export async function getStoryById (id: number) {
    try {
        const { data } = await api.get<Story>(`/stories/${id}`);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw new Error("Error getting story.")
    }
}

export async function newStory (formData: StoryForm) {
    try {
        const { data } = await api.post("/stories/new", formData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        throw new Error(`Error getting story. ${error}`)
    }
}