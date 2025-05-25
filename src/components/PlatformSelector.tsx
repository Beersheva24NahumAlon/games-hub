import React, { useMemo, useState } from 'react'
import usePlatforms from '../hooks/usePlatforms';
import { Box, Button, Menu, Portal, Spinner, Text } from '@chakra-ui/react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { allPlatforms, Platform } from '../model/fetch-platform-types';
import ComponentMotion from './ComponentMotion';
import { easeOut } from 'framer-motion';

interface Props {
    onSelectPlatform: (platformObj: Platform) => void;
    selectedPlatform: Platform | null;
}

const duration = 0.5;
const PlatformSelector: React.FC<Props> = ({ onSelectPlatform, selectedPlatform}) => {
    const { data: platforms, errorMsg, isLoading } = usePlatforms();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    useMemo(() => platforms.unshift(allPlatforms), platforms);

    return isLoading ?
        (<Spinner />) :
        (
            <>{
                errorMsg ?
                    <Text color="red">{errorMsg}</Text> :
                    <Box marginLeft={5}>
                        <Menu.Root >
                            <Menu.Trigger asChild>
                                <Button variant="outline" size="sm" onClick={() => setIsOpen(!isOpen)}>
                                    Platform {selectedPlatform ? <Text fontWeight="normal">{selectedPlatform.name}</Text> : ""}
                                    {!isOpen ? 
                                        <ComponentMotion duration={duration} timing={easeOut}>
                                            <FaAngleDown />
                                        </ComponentMotion> 
                                        : <FaAngleUp />}
                                </Button>
                            </Menu.Trigger>
                            <Portal>
                                <Menu.Positioner>
                                    <ComponentMotion duration={duration} timing={easeOut}>
                                    <Menu.Content>
                                        {
                                            platforms.map(p => 
                                                <Menu.Item value={p.name} key={p.id} onClick={() => {onSelectPlatform(p);setIsOpen(false);}}>{p.name} </Menu.Item>)
                                        }
                                    </Menu.Content>
                                    </ComponentMotion>
                                </Menu.Positioner>
                            </Portal>
                        </Menu.Root>
                    </Box>
            }</>
        )
}

export default PlatformSelector;