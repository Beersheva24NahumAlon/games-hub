import { Grid, GridItem, HStack, Stack } from '@chakra-ui/react'
import './App.css'
import Nav from './components/Nav'
import GameGrid from './components/GameGrid'
import GenresList from './components/GenresList'
import { useState } from 'react'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './model/fetch-platform-types'
import { Genre } from './model/fetch-genre-types'
import GameQuery from './model/GameQuery'
import OrderSelector from './components/OrderSelector'
import GenreSelector from './components/GenreSelector'

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid templateAreas={{
      base: `'nav' 'main'`,
      md: `'nav nav' 'aside main'`
    }}>
      <GridItem area="nav">
        <Nav searchSubmitter={(text) => setGameQuery({ ...gameQuery, search: text })} />
      </GridItem>
      <Stack hideBelow="md">
        <GridItem area="aside">
          <GenresList
            onSelectGenre={(genreObj: Genre | null) => setGameQuery({ ...gameQuery, genreObj })}
            selectedGenre={gameQuery.genreObj}
          />
        </GridItem>
      </Stack>
      <GridItem area="main">
        <HStack paddingLeft="5">
          Platform:
          <PlatformSelector
            onSelectPlatform={(platformObj: Platform | null) => setGameQuery({ ...gameQuery, platformObj })}
            selectedPlatform={gameQuery.platformObj}
          />
          Order by:
          <OrderSelector
            selectedOrder={gameQuery.orderObj}
            onSelectOrder={(orderObj) => setGameQuery({ ...gameQuery, orderObj })}
          />
          <HStack display={{ base: "none", sm: "flex" }} hideFrom="md">
            Genre:
            <GenreSelector
              onSelectGenre={(genreObj: Genre | null) => setGameQuery({ ...gameQuery, genreObj })}
              selectedGenre={gameQuery.genreObj}
            />
          </HStack>
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
