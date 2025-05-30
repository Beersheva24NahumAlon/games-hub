import React, { useState } from 'react'
import usePlatforms from '../hooks/usePlatforms';
import { Box, Button, Menu, Portal, Spinner, Text } from '@chakra-ui/react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import ComponentMotion from './ComponentMotion';
import { easeOut } from 'framer-motion';
import useGameQuery from '../state-management/store';

const duration = 0.5;
const PlatformSelector: React.FC = () => {

    const { data: platforms, error, isLoading } = usePlatforms();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const setPlaftorm = useGameQuery(s => s.setPlatform);
    const selectedPlatform = useGameQuery(s => s.gameQuery.platformObj);

    return isLoading ?
        (<Spinner />) :
        (
            <>{
                error?.message ?
                    <Text color="red">{error.message}</Text> :
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
                                                key={"platform"}
                                                onClick={() => setPlaftorm(null)}
                                                value={""}
                                            >
                                                All platforms
                                            </Menu.Item>
                                            {
                                                platforms?.map(p =>
                                                    <Menu.Item value={p.name} key={p.id} onClick={() => { setPlaftorm(p); setIsOpen(false); }}>{p.name} </Menu.Item>)
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