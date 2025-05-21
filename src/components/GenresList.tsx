import React from 'react'
import { Text, List, Avatar, HStack, Button, Spinner } from '@chakra-ui/react'
import useApiGenres from '../hooks/useGenres';

interface Props {
    onSelectGenre: (genreName: string) => void;
    selectedGenre: string | null;
}

const GenresList: React.FC<Props> = ({ onSelectGenre, selectedGenre }) => {

    const { data: genres, errorMsg, isLoading } = useApiGenres();
    return isLoading ?
        ( <Spinner /> ) :
        (
            <>{
                errorMsg ?
                    <Text color="red">{errorMsg}</Text> :
                    <List.Root maxHeight="85vh" overflow="auto">
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
                                        onClick={() => onSelectGenre(genre.slug)} 
                                        fontWeight={selectedGenre === genre.slug ? "bold" : "normal"}
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