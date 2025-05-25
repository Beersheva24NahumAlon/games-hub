import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.png';
import { ColorModeButton } from './ui/color-mode';
import SearchBar from './SearchBar';

interface Props {
    searchSubmitter: (text: string) => void
}

const Nav:React.FC<Props> = ({searchSubmitter}) => {
  return (
    <HStack>
        <Image src={logo} boxSize="60px"></Image>
        <SearchBar searchSubmitter={searchSubmitter}></SearchBar>
        <ColorModeButton marginRight="10px"/>
    </HStack>
  )
}

export default Nav