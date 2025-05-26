import { Box, Input, InputGroup } from '@chakra-ui/react'
import React, { FormEvent, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import useGameQuery from '../hooks/useGameQuery'


const SearchBar: React.FC = () => {
    const setSerch = useGameQuery(s => s.setSearch);
    const inputElement = useRef<HTMLInputElement>(null);
    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        inputElement.current?.blur();
        setSerch(inputElement.current?.value || "");
    }
    return (
        <Box as="form" onSubmit={onSubmit} boxSize="100%">
            <InputGroup startElement={<FaSearch />}>
                <Input 
                    ref={inputElement} 
                    borderRadius="30px" 
                    placeholder="Search games..."
                    onFocus={() => inputElement.current?.value && (inputElement.current.value = "")}
                />
            </InputGroup>
        </Box>
    )
}

export default SearchBar