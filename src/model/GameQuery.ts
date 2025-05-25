import { Genre } from "./fetch-genre-types";
import { Platform } from "./fetch-platform-types";

export default interface GameQuery {
    genreObj: Genre | null;
    platformObj: Platform | null;
    search: string | null
}