import React, { useEffect, useState } from 'react'
import { Gener, GenresResponse } from '../model/fetch-gener-types';
import api from '../services/api-client'
import { AxiosError } from 'axios';
import { Text, List, Avatar, HStack, Button } from '@chakra-ui/react'

interface Props {
    onSelectGener: (genreName: string) => void;
}

const GenresList: React.FC<Props> = ({onSelectGener}) => {

    const [genres, setGenres] = useState<Gener[]>([]);
    const [errorMsg, setErrorMsg] = useState<string>("");

    useEffect(() => {
        api.get<GenresResponse>("/genres")
            .then(res => setGenres(res.data.results))
            .catch((err: AxiosError) => setErrorMsg(err.message));
    }, []);

    return (
        <>{
            errorMsg ?
                <Text color="red">{errorMsg}</Text> :
                <List.Root maxHeight="85vh" overflow="auto">
                    {genres.map(gener =>
                        <List.Item key={gener.id} marginBottom="2" paddingX="2">
                            <HStack>
                                <Avatar.Root shape="rounded" me="-2">
                                    <Avatar.Fallback name={gener.name} />
                                    <Avatar.Image src={gener.image_background} />
                                </Avatar.Root>
                                <Button variant="outline" borderWidth="0" onClick={onSelectGener.bind(undefined, gener.name)}>
                                    {gener.name}
                                </Button>
                            </HStack>
                        </List.Item>
                    )}
                </List.Root>
        }</>
    )
}

export default GenresList