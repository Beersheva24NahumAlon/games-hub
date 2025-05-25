import { Grid, GridItem, Stack } from '@chakra-ui/react'
import './App.css'
import Nav from './components/Nav'
import GameGrid from './components/GameGrid'
import GenresList from './components/GenresList'
import { useState } from 'react'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './model/fetch-platform-types'
import { Genre } from './model/fetch-genre-types'
import GameQuery from './model/GameQuery'

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid templateAreas={{
      base: `'nav' 'main'`,
      md: `'nav nav' 'aside main'`
    }}>
      <GridItem area="nav">
        <Nav searchSubmitter={(text) => setGameQuery({...gameQuery, search: text})}/>
      </GridItem>
      <Stack hideBelow="md">
        <GridItem area="aside">
          <GenresList 
            onSelectGenre={(genreObj: Genre | null) => setGameQuery({...gameQuery, genreObj})} 
            selectedGenre={gameQuery.genreObj}
          />
        </GridItem>
      </Stack>
      <GridItem area="main">
        <PlatformSelector 
          onSelectPlatform={(platformObj:Platform | null) => setGameQuery({...gameQuery, platformObj})} 
          selectedPlatform={gameQuery.platformObj}
        />
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  )
}

export default App
