import { useCallback, useState } from "react";
import { Filters } from "./Filters";
import { useForm } from "react-hook-form";
import { AvailabilityFilters } from "../interfaces/ExerciseInterface";
import { initAvailabilityFilters } from "../utils/constants";
import { Card, CardContent } from "@mui/material";

export const MenuExercise = () => {
  const formAvailability = useForm<
    AvailabilityFilters,
    any,
    AvailabilityFilters
  >({
    defaultValues: initAvailabilityFilters,
  });

  const [loading, setLoading] = useState(false);
  const { watch } = formAvailability;
  const filters = watch();

  const onSearch = useCallback(async () => {
    setLoading(true);

    try {
      console.log("onSearch");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  return (
    <>
      <h1>MenuExercise</h1>
      <Card>
        <CardContent>
          <Filters
            onSearch={onSearch}
            loading={loading}
            formAvailability={formAvailability}
          />
        </CardContent>
      </Card>
    </>
  );
};
