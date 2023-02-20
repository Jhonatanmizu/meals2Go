import * as React from "react";
import { Searchbar } from "react-native-paper";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Busque aqui..."
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default SearchInput;
