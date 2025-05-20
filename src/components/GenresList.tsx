import React from 'react'
import { Gener, GenresResponse } from '../model/fetch-gener-types';
import { Text, List, Avatar, HStack, Button } from '@chakra-ui/react'
import useApi from '../hooks/useApi';

interface Props {
    onSelectGener: (genreName: string) => void;
}

const GenresList: React.FC<Props> = ({onSelectGener}) => {

    const {data, errorMsg} = useApi<Gener, GenresResponse>("/genres");

    return (
        <>{
            errorMsg ?
                <Text color="red">{errorMsg}</Text> :
                <List.Root maxHeight="85vh" overflow="auto">
                    {data.map(gener =>
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