export type Story = {
    id: number,
    title: string,
    author: string,
    content: string,
    image: string,
    createdAt: string;
    updatedAt: string;
}

export type StoryForm = Pick<Story, "title" | "author" | "image" | "content">