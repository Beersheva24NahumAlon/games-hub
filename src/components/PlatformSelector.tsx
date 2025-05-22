import React from 'react'
import usePlatforms from '../hooks/usePlatforms';
import { Box, Button, Menu, Portal, Spinner, Text } from '@chakra-ui/react';
import { FaAngleDown } from 'react-icons/fa';
import { Platform } from '../model/fetch-platform-types';

interface Props {
    onSelectPlatform: (platformObj: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector: React.FC<Props> = ({ onSelectPlatform, selectedPlatform}) => {
    const { data: platforms, errorMsg, isLoading } = usePlatforms();

    return isLoading ?
        (<Spinner />) :
        (
            <>{
                errorMsg ?
                    <Text color="red">{errorMsg}</Text> :
                    <Box marginLeft={5}>
                        <Menu.Root >
                            <Menu.Trigger asChild>
                                <Button variant="outline" size="sm">
                                    Platform {selectedPlatform ? <Text fontWeight="normal">{selectedPlatform.name}</Text> : ""}<FaAngleDown />
                                </Button>
                            </Menu.Trigger>
                            <Portal>
                                <Menu.Positioner>
                                    <Menu.Content>
                                        {
                                            platforms.map(p => 
                                                <Menu.Item value={p.name} key={p.id} onClick={() => onSelectPlatform(p)}>{p.name} </Menu.Item>)
                                        }
                                    </Menu.Content>
                                </Menu.Positioner>
                            </Portal>
                        </Menu.Root>
                    </Box>
            }</>
        )
}

export default PlatformSelector;