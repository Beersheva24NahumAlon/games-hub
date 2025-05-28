import Genre from "./Genre";
import Order from "./Order";
import Platform from "./Platform";

export default interface GameQuery {
    genreObj: Genre | null;
    platformObj: Platform | null;
    search: string | null;
    orderObj: Order | null;
}