import React, { useState } from 'react'
import usePlatforms from '../hooks/usePlatforms';
import { Box, Button, Menu, Portal, Spinner, Text } from '@chakra-ui/react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { Platform } from '../model/fetch-platform-types';
import ComponentMotion from './ComponentMotion';
import { easeOut } from 'framer-motion';

interface Props {
    onSelectPlatform: (platformObj: Platform | null) => void;
    selectedPlatform: Platform | null;
}

const duration = 0.5;
const PlatformSelector: React.FC<Props> = ({ onSelectPlatform, selectedPlatform }) => {
    const { data: platforms, errorMsg, isLoading } = usePlatforms();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return isLoading ?
        (<Spinner />) :
        (
            <>{
                errorMsg ?
                    <Text color="red">{errorMsg}</Text> :
                    <Box>
                        <Menu.Root onExitComplete={() => setIsOpen(false)}>
                            <Menu.Trigger asChild>
                                <Button variant="outline" size="sm" onClick={() => setIsOpen(!isOpen)}>
                                    {selectedPlatform ? selectedPlatform.name : "All platforms"}
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
                                            <Menu.Item
                                                key={"p.id"}
                                                onClick={() => {
                                                    onSelectPlatform(null);
                                                }}
                                                value={""}
                                            >
                                                All platforms
                                            </Menu.Item>
                                            {
                                                platforms.map(p =>
                                                    <Menu.Item value={p.name} key={p.id} onClick={() => { onSelectPlatform(p); setIsOpen(false); }}>{p.name} </Menu.Item>)
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