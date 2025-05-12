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

export type EpisodeCardType = {
    id: number,
    name: string,
    description: string,
    date: string,
    imgSrc: string,
    duration: number,
    spotifyUrl: string,
    youtubeUrl: string,
}