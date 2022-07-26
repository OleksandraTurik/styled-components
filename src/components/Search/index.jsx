import React from "react";
import {SearchWrapper, Input, Button} from './style'

const Search = () => {
  return (
    <SearchWrapper class="search">
      <Input type="search" placeholder="Type city here..."></Input>
      <Button>Search</Button>
    </SearchWrapper>
  );
};

export default Search;
