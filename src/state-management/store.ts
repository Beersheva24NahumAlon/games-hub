import { Platform } from "../model/fetch-platform-types";
import { Genre } from "../model/fetch-genre-types";
import Order from "../model/Order";
import { create } from "zustand";

interface GameQuery {
    genreObj: Genre | null;
    platformObj: Platform | null;
    search: string | null;
    orderObj: Order | null;
}

interface GameQueryStore {
    gameQuery: GameQuery;
    setGenre: (genreObj: Genre | null) => void;
    setPlatform: (platformObj: Platform | null) => void;
    setSearch: (search: string | null) => void;
    setOrder: (orderObj: Order | null) => void;
}

const useGameQuery = create<GameQueryStore>(set => ({
    gameQuery: {genreObj: null, platformObj: null, search: null, orderObj: null},

    setGenre: (genreObj) => set((prevState) => ({
        gameQuery: prevState.gameQuery.genreObj?.slug != genreObj?.slug 
            ? {...prevState.gameQuery, genreObj} 
                : prevState.gameQuery
    })),
    setPlatform: (platformObj) => set((prevState) => ({
        gameQuery: prevState.gameQuery.platformObj?.id != platformObj?.id 
            ? {...prevState.gameQuery, platformObj} 
                : prevState.gameQuery
    })),
    setOrder: (orderObj) => set((prevState) => ({
        gameQuery: prevState.gameQuery.orderObj?.value != orderObj?.value 
            ? {...prevState.gameQuery, orderObj} 
                : prevState.gameQuery
    })),
    setSearch: (search) => set((prevState) => ({
        gameQuery: prevState.gameQuery.search != search 
            ? {genreObj: null, platformObj: null, orderObj:prevState.gameQuery.orderObj, search} 
                : prevState.gameQuery
    })),
}));

export default useGameQuery;