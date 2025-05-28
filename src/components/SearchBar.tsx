import { Box, Input, InputGroup } from '@chakra-ui/react'
import React, { FormEvent, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import useGameQuery from '../state-management/store'


const SearchBar: React.FC = () => {
    const setSerch = useGameQuery(s => s.setSearch);
    const searchText = useGameQuery(s => s.gameQuery.search);

    const inputElement = useRef<HTMLInputElement>(null);
    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        setSerch(inputElement.current?.value || "");
        inputElement.current?.blur();
    }
    return (
        <Box as="form" onSubmit={onSubmit} boxSize="100%" display="flex">
            <InputGroup startElement={<FaSearch />}>
                <Input 
                    ref={inputElement} 
                    borderRadius="30px" 
                    placeholder={searchText ? `Searched by: ${searchText}` : "Search games..."}
                    onFocus={() => inputElement.current?.value && (inputElement.current.value = "")}
                    onBlur={() => inputElement.current?.value && (inputElement.current.value = "")}
                />
            </InputGroup>
        </Box>
    )
}

export default SearchBar