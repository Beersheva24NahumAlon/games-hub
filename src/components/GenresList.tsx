import React from 'react'
import { Text, List, Avatar, HStack, Button } from '@chakra-ui/react'
import useApiGenres from '../hooks/useApiGenres';

interface Props {
    onSelectGenre: (genreName: string) => void;
}

const GenresList: React.FC<Props> = ({onSelectGenre}) => {

    const {data, errorMsg} = useApiGenres();

    return (
        <>{
            errorMsg ?
                <Text color="red">{errorMsg}</Text> :
                <List.Root maxHeight="85vh" overflow="auto">
                    {data.map(genre =>
                        <List.Item key={genre.id} marginBottom="2" paddingX="2">
                            <HStack>
                                <Avatar.Root shape="rounded" me="-2">
                                    <Avatar.Fallback name={genre.name} />
                                    <Avatar.Image src={genre.image_background} />
                                </Avatar.Root>
                                <Button variant="outline" borderWidth="0" onClick={onSelectGenre.bind(undefined, genre.name)}>
                                    {genre.name}
                                </Button>
                            </HStack>
                        </List.Item>
                    )}
                </List.Root>
        }</>
    )
}

export default GenresList