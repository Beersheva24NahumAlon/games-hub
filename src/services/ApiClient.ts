import { Game } from "../model/fetch-game-types";
import GameQuery from "../model/GameQuery";
import Genre from "../model/Genre";
import Platform from "../model/Platform";

export default interface ApiClient {
    getGenres(): Promise<Genre[]>;
    getGames(gameQuery: GameQuery): Promise<Game[]>;
    getPlatforms(): Promise<Platform[]>
}