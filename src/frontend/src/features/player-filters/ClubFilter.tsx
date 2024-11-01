import { MenuItem, Select } from "../ui";
import { useClubs } from "./playerFilters.query.ts";
import { usePlayerFilters } from "./playerFilters.hooks.ts";
import { ClubProps } from "./playerFilters.types.ts";

export const ClubFilter = () => {
  const { data, isLoading, isError } = useClubs();
  const { clubIds, updateTempFilters } = usePlayerFilters();

  const allClubIds = data ? data.map((country: ClubProps) => country.id) : [];

  const toggleSelection = (id: number) => {
    const newSelection = clubIds.includes(id)
      ? clubIds.filter((val) => val !== id)
      : [...clubIds, id];
    updateTempFilters("club", newSelection, allClubIds); // Oppdaterer midlertidig state
  };
  return (
    <Select
      value={clubIds}
      variant="standard"
      multiple={true}
      disabled={isLoading || isError}
      children={[
        <MenuItem
          key={-1}
          value={-1}
          isChecked={clubIds.includes(-1)}
          onClick={() => toggleSelection(-1)}
        >
          All clubs
        </MenuItem>,
        ...(Array.isArray(data)
          ? data.map((club) => (
              <MenuItem
                key={club.id}
                value={club.id}
                isChecked={clubIds.includes(club.id)}
                endIcon={club.logoUrl}
                onClick={() => toggleSelection(club.id)}
              >
                {club.name}
              </MenuItem>
            ))
          : []),
      ]}
      description={
        !isError ? "Select clubs to filter by" : "Failed to load clubs"
      }
    />
  );
};
