import { MenuItem, Select } from "../ui";
import { usePositions } from "./playerFilters.query.ts";
import { usePlayerFilters } from "./playerFilters.hooks.ts";

export const PositionFilter = () => {
  const { data, isLoading, isError } = usePositions();
  const { positionIds, updateTempFilters } = usePlayerFilters();

  const toggleSelection = (id: number) => {
    const newSelection = positionIds.includes(id)
      ? positionIds.filter((val) => val !== id)
      : [...positionIds, id];
    updateTempFilters("country", newSelection); // Oppdaterer midlertidig state
  };

  return (
    <Select
      variant="standard"
      value={positionIds}
      multiple={true}
      disabled={isLoading || isError}
      description="Select positions to filter by"
      children={[
        <MenuItem
          key={-1}
          value={-1}
          isChecked={positionIds.includes(-1)}
          onClick={() => toggleSelection(-1)}
        >
          All positions
        </MenuItem>,
        ...(Array.isArray(data)
          ? data.map((position) => (
              <MenuItem
                key={position.id}
                value={position.id}
                isChecked={positionIds.includes(position.id)}
                onClick={() => toggleSelection(position.id)}
              >
                {position.name}
              </MenuItem>
            ))
          : []),
      ]}
    />
  );
};
