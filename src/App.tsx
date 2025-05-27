import { Grid, GridItem, HStack, Stack } from '@chakra-ui/react'
import './App.css'
import Nav from './components/Nav'
import GameGrid from './components/GameGrid'
import GenresList from './components/GenresList'
import PlatformSelector from './components/PlatformSelector'
import OrderSelector from './components/OrderSelector'
import GenreSelector from './components/GenreSelector'

function App() {

  //const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          <GenresList />
        </GridItem>
      </Stack>
      <GridItem area="main">
        <HStack paddingLeft="5">
          <PlatformSelector/>
          <Stack display={{ base: "none", sm: "flex" }} hideFrom="md">
            <GenreSelector/>
          </Stack>
          <OrderSelector/>
        </HStack>
        <GameGrid/>
      </GridItem>
    </Grid>
  )
}

export default App
