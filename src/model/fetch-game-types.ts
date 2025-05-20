export interface Game {
    id: number,
    background_image: string;
    name: string
}

export interface GamesResponse {
    count: number;
    results: Game[];
}