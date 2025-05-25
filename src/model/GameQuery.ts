import { Genre } from "./fetch-genre-types";
import { Platform } from "./fetch-platform-types";
import Order from "./Order";

export default interface GameQuery {
    genreObj: Genre | null;
    platformObj: Platform | null;
    search: string | null;
    orderObj: Order | null;
}