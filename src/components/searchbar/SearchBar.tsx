import { Input } from "@chakra-ui/react"
import { InputGroup } from "../ui/input-group"
import { LuSearch } from "react-icons/lu";
import { useDebounce } from 'use-debounce';
import { useEffect, useState } from "react";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  const [auxSearchQuery, setAuxSearchQuery] = useState("");
  const [debouncedQuery] = useDebounce(auxSearchQuery, 400);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuxSearchQuery(e.target.value);
  };

  useEffect(() => {
    setSearchQuery(debouncedQuery);
  }, [debouncedQuery]);
  
  return (
    <InputGroup
      padding={5}
      startElement={<LuSearch />}
    >
      <Input
        placeholder="Pesquisar cursos"
        value={auxSearchQuery} 
        onChange={handleChange}/>
    </InputGroup>
  )
}

export default SearchBar;
