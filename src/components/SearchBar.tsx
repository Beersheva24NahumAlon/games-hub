import { Box, Input, InputGroup } from '@chakra-ui/react'
import React, { FormEvent, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'

interface Props {
    searchSubmitter: (text: string) => void
}

const SearchBar: React.FC<Props> = ({searchSubmitter}) => {
    const inputElement = useRef<HTMLInputElement>(null);
    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        inputElement.current?.blur();
        searchSubmitter(inputElement.current?.value || "");
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