import React, { useState } from 'react'
import useGenres from '../hooks/useGenres';
import { Box, Button, Menu, Portal, Spinner, Text } from '@chakra-ui/react';
import { easeOut } from 'framer-motion';
import ComponentMotion from './ComponentMotion';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import useGameQuery from '../state-management/store';

const duration = 0.5;
const GenreSelector: React.FC = () => {
    const { data: genres, error, isLoading } = useGenres();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const setGenre = useGameQuery(s => s.setGenre);
    const selectedGenre = useGameQuery(s => s.gameQuery.genreObj);
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
                                    {selectedGenre ? selectedGenre.name : "All genres"}
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
                                                key={"genre"}
                                                onClick={() => setGenre(null)}
                                                value={""}
                                            >
                                                All genres
                                            </Menu.Item>
                                            {
                                                genres?.map(p =>
                                                    <Menu.Item value={p.name} key={p.id} onClick={() => { setGenre(p); setIsOpen(false); }}>{p.name} </Menu.Item>)
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

export default GenreSelector