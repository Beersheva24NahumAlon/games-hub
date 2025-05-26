import React, { useState } from 'react'
import { Genre } from '../model/fetch-genre-types';
import useGenres from '../hooks/useGenres';
import { Box, Button, Menu, Portal, Spinner, Text } from '@chakra-ui/react';
import { easeOut } from 'framer-motion';
import ComponentMotion from './ComponentMotion';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

interface Props {
    onSelectGenre: (platformObj: Genre | null) => void;
    selectedGenre: Genre | null;
}

const duration = 0.5;
const GenreSelector: React.FC<Props> = ({ onSelectGenre, selectedGenre }) => {
    const { data: genres, errorMsg, isLoading } = useGenres();
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
                                                key={"p.id"}
                                                onClick={() => {
                                                    onSelectGenre(null);
                                                }}
                                                value={""}
                                            >
                                                All genres
                                            </Menu.Item>
                                            {
                                                genres.map(p =>
                                                    <Menu.Item value={p.name} key={p.id} onClick={() => { onSelectGenre(p); setIsOpen(false); }}>{p.name} </Menu.Item>)
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