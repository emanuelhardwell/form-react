import { useCallback, useState } from "react";
import { Filters } from "./Filters";
import { useForm } from "react-hook-form";
import { AvailabilityFilters } from "../interfaces/ExerciseInterface";
import { initAvailabilityFilters } from "../utils/constants";

export const MenuExercise = () => {
  const formAvailability = useForm<
    AvailabilityFilters,
    any,
    AvailabilityFilters
  >({
    defaultValues: initAvailabilityFilters,
  });

  const [loading, setLoading] = useState(false);

  const onSearch = useCallback(async () => {
    setLoading(true);
  }, []);

  return (
    <div>
      <h1>MenuExercise</h1>
      <Filters
        onSearch={onSearch}
        loading={loading}
        formAvailability={formAvailability}
      />
    </div>
  );
};
