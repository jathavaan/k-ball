import { MenuItem, Select } from "../ui";
import { usePositions } from "./playerFilters.query.ts";
import { usePositionSelection } from "./playerFilters.hooks.ts";

export const PositionFilter = () => {
  const { data, isLoading, isError } = usePositions();
  const { positionIds, toggleSelection } = usePositionSelection();

  return (
    <Select
      variant="standard"
      value={positionIds}
      multiple={true}
      disabled={isLoading || isError}
      description="Select positions to filter by"
      labelId="position-select-filter-label"
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
