import React from "react";
import { Label, SearchField } from "@heroui/react";

const SearchBox = () => {
  return (
    <SearchField name="search">
      {/* <Label>Search</Label> */}
      <SearchField.Group className={"w-full"}>
        <SearchField.SearchIcon />
        <SearchField.Input className="w-full min-w-0" placeholder="Search..." />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
  );
};

export default SearchBox;
