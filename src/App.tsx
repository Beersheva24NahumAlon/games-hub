
import { Button } from '@chakra-ui/react'
import './App.css'
import { ColorModeButton } from './components/ui/color-mode'
import { toaster, Toaster } from './components/ui/toaster'

function App() {

  return (
    <>
      <ColorModeButton>
      </ColorModeButton>
      <Toaster></Toaster>
      <Button onClick={() => toaster.create({
        description: "File is saved",
        type: "info",
        action: {
          label: "X",
          onClick: () => { }
        }
      })}>
        Save file

      </Button>
    </>
  )
}

export default App
