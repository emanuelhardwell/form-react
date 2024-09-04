import { FC } from "react";
import { AvailabilityFilters } from "../interfaces/ExerciseInterface";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { Button, CircularProgress, Grid } from "@mui/material";
import { FilterElement } from "../components/FilterElement/FilterElement";
import { Search } from "@mui/icons-material";

interface FiltersProps {
  onSearch: (values: AvailabilityFilters) => void;
  loading: boolean;
  formAvailability: UseFormReturn<
    AvailabilityFilters,
    any,
    AvailabilityFilters
  >;
}

export const Filters: FC<FiltersProps> = ({
  onSearch,
  loading,
  formAvailability,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = formAvailability;

  const onSubmit: SubmitHandler<AvailabilityFilters> = (filters) =>
    onSearch(filters);

  if (loading) {
    return <h5>Cragando ...</h5>;
  }

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <h1>Filters</h1>
      <br />

      <Grid container>
        <Grid item xs={12} md={3}>
          <FilterElement
            selectProps={{
              multiple: true,
              variant: "outlined",
              error: Boolean(errors.name),
              required: true,
            }}
            helperText={errors.name?.message?.toString() || ""}
            control={control}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={25} />
            ) : (
              <>
                <Search />
                Buscar
              </>
            )}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
