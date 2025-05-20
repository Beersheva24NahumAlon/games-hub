export interface Game {
    id: number;
    background_image: string;
    name: string;
    parent_platforms: Platform[];
    metacritic: number;
}

export interface GamesResponse {
    count: number;
    results: Game[];
}

export interface Platform {
    platform: {
        id: number;
        name: string;
        slug: string;
    }
}