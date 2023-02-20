import { useState } from "react";
import * as S from "./styles";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <S.Search
      elevation={5}
      placeholder="Busque aqui..."
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default SearchInput;
