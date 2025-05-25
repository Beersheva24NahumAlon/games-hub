import React from 'react'
import { Text, List, Avatar, HStack, Button, Spinner } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres';
import { Genre } from '../model/fetch-genre-types';

interface Props {
    onSelectGenre: (genreObj: Genre | null) => void;
    selectedGenre: Genre | null;
}

const GenresList: React.FC<Props> = ({ onSelectGenre, selectedGenre }) => {

    const { data: genres, errorMsg, isLoading } = useGenres();

    return isLoading ?
        (<Spinner />) :
        (
            <>{
                errorMsg ?
                    <Text color="red">{errorMsg}</Text> :
                    <List.Root maxHeight="85vh" overflow="auto">
                        <List.Item key="g.id" marginBottom="2" paddingX="2">
                            <HStack>
                                <Button
                                    variant="outline"
                                    borderWidth="0"
                                    onClick={() => onSelectGenre(null)}
                                    fontWeight={!selectedGenre?.slug ? "bold" : "normal"}
                                >
                                    All genres
                                </Button>
                            </HStack>
                        </List.Item>
                        {genres.map(genre =>
                            <List.Item key={genre.id} marginBottom="2" paddingX="2">
                                <HStack>
                                    <Avatar.Root shape="rounded" me="-2">
                                        <Avatar.Fallback name={genre.name} />
                                        <Avatar.Image src={genre.image_background} />
                                    </Avatar.Root>
                                    <Button
                                        variant="outline"
                                        borderWidth="0"
                                        onClick={() => onSelectGenre(genre)}
                                        fontWeight={selectedGenre?.slug === genre.slug ? "bold" : "normal"}
                                    >
                                        {genre.name}
                                    </Button>
                                </HStack>
                            </List.Item>
                        )}
                    </List.Root>
            }</>
        );
}

export default GenresList