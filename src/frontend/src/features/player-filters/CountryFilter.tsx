import { useCountries } from "./playerFilters.query.ts";
import { MenuItem, Select } from "../ui";
import { useCountrySelection } from "./playerFilters.hooks.ts";

export const CountryFilter = () => {
  const { data, isLoading, isError } = useCountries();
  const { countryIds, toggleSelection } = useCountrySelection();

  return (
    <Select
      value={countryIds}
      variant="standard"
      multiple={true}
      disabled={isLoading || isError}
      children={[
        <MenuItem
          key={-1}
          value={-1}
          isChecked={countryIds.includes(-1)}
          onClick={() => toggleSelection(-1)}
        >
          All countries
        </MenuItem>,
        ...(Array.isArray(data)
          ? data.map((country) => (
              <MenuItem
                key={country.id}
                value={country.id}
                isChecked={countryIds.includes(country.id)}
                endIcon={country.flagUrl}
                onClick={() => toggleSelection(country.id)}
              >
                {country.name}
              </MenuItem>
            ))
          : []),
      ]}
      description={
        !isError ? "Select countries to filter by" : "Failed to load countries"
      }
    />
  );
};
