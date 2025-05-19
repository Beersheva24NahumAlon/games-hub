import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.png';
import { ColorModeButton } from './ui/color-mode';

const Nav:React.FC = () => {
  return (
    <HStack justifyContent="space-between">
        <Image src={logo} boxSize="60px"></Image>
        <ColorModeButton></ColorModeButton>
    </HStack>
  )
}

export default Nav