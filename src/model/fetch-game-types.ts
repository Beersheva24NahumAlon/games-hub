export interface Game {
    id: number,
    name: string
}

export interface GamesResponse {
    count: number;
    results: Game[];
}