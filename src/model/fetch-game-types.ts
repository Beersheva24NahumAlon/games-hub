export interface Game {
    id: number;
    background_image: string;
    name: string;
    parent_platforms: Platform[];
    metacritic: number;
    rating: number;
    rating_top: number;
}

export interface Platform {
    platform: {
        id: number;
        name: string;
        slug: string;
    }
}