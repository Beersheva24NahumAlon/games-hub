import { Grid, GridItem, Stack } from '@chakra-ui/react'
import './App.css'
import Nav from './components/Nav'
import GameGrid from './components/GameGrid'
import GenresList from './components/GenresList'
import { useState } from 'react'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './model/fetch-platform-types'

function App() {

  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  return (
    <Grid templateAreas={{
      base: `'nav' 'main'`,
      md: `'nav nav' 'aside main'`
    }}>
      <GridItem area="nav">
        <Nav/>
      </GridItem>
      <Stack hideBelow="md">
        <GridItem area="aside">
          <GenresList 
            onSelectGenre={(generName:string) => setSelectedGenre(generName)} 
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Stack>
      <GridItem area="main">
        <PlatformSelector 
          onSelectPlatform={(platformObj:Platform) => setSelectedPlatform(platformObj)} 
          selectedPlatform={selectedPlatform}
        />
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}/>
      </GridItem>
    </Grid>
  )
}

export default App
