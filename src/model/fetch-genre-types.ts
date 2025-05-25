export interface Genre {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}

export const allGenres: Genre = { id: 0, name: "All genres", slug: "", image_background: "" };

