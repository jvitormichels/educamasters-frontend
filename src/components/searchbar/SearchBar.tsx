import { Input } from "@chakra-ui/react"
import { InputGroup } from "../ui/input-group"
import { LuSearch } from "react-icons/lu";
import { useEffect, useState } from "react";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  return (
    <InputGroup
      flex="1"
      startElement={<LuSearch />}
    >
      <Input
        placeholder="Pesquisar cursos"
        value={searchQuery} 
        onChange={handleChange}/>
    </InputGroup>
  )
}

export default SearchBar;
