import { Platform } from "../model/fetch-platform-types";
import { Genre } from "../model/fetch-genre-types";
import GameQuery from "../model/GameQuery";
import Order from "../model/Order";
import { create } from "zustand";

interface GameQueryStore {
    gameQuery: GameQuery;
    setGenre: (genreObj: Genre | null) => void;
    setPlatform: (platformObj: Platform | null) => void;
    setSearch: (search: string | null) => void;
    setOrder: (orderObj: Order | null) => void;
}

const useGameQuery = create<GameQueryStore>(set => ({
    gameQuery: {genreObj:null, platformObj: null, search: null, orderObj: null},
    setGenre: (genreObj) => set((prevState) => ({gameQuery: {...prevState.gameQuery, genreObj}})),
    setPlatform: (platformObj) => set((prevState) => ({gameQuery: {...prevState.gameQuery, platformObj}})),
    setSearch: (search) => set((prevState) => ({gameQuery: {...prevState.gameQuery, search}})),
    setOrder: (orderObj) => set((prevState) => ({gameQuery: {...prevState.gameQuery, orderObj}})),
}));

export default useGameQuery;