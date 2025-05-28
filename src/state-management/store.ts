import Platform from "../model/Platform";
import Genre from "../model/Genre";
import Order from "../model/Order";
import { create } from "zustand";
import GameQuery from "../model/GameQuery";

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
            ? {...prevState.gameQuery, genreObj, search: null} 
                : prevState.gameQuery
    })),
    setPlatform: (platformObj) => set((prevState) => ({
        gameQuery: prevState.gameQuery.platformObj?.id != platformObj?.id 
            ? {...prevState.gameQuery, platformObj, search: null} 
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