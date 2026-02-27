import { SearchField } from "@heroui/react";

export default function SearchBox() {
  return (
    <SearchField name="search">
      <SearchField.Group className="w-full">
        <SearchField.SearchIcon />
        <SearchField.Input
          className="w-full min-w-0"
          placeholder="Search..."
        />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
  );
}
