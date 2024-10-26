import { StyledSearchContainer, StyledSearchInput } from "./searchbar.style";

export default function SearchBar() {
  return  (
    <StyledSearchContainer>
      <StyledSearchInput
        variant="outlined"
        placeholder="Search for players on names.."
      />
    </StyledSearchContainer>
  );
}
