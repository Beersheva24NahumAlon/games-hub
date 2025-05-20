import { Grid, GridItem, Stack } from '@chakra-ui/react'
import './App.css'
import Nav from './components/Nav'
import GameGrid from './components/GameGrid'
import GenresList from './components/GenresList'

function App() {

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
          <GenresList onSelectGener={(generName:string) => console.log(generName)}/>
        </GridItem>
      </Stack>
      <GridItem area="main">
        <GameGrid/>
      </GridItem>
    </Grid>
  )
}

export default App
