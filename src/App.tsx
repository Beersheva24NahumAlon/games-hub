import { Grid, GridItem, Stack } from '@chakra-ui/react'
import './App.css'
import Nav from './components/Nav'
import GameGrid from './components/GameGrid'
import GenresList from './components/GenresList'
import { useState } from 'react'

function App() {

  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

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
          <GenresList onSelectGenre={(generName:string) => setSelectedGenre(generName)}  selectedGenre={selectedGenre}/>
        </GridItem>
      </Stack>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  )
}

export default App
