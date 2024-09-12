import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectProps,
  FormHelperText,
} from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface FilterElementProps<T extends FieldValues> {
  helperText: string;
  selectProps?: SelectProps<string | string[]>;
  control: Control<T>;
}

const bodyParts = [
  "back",
  "cardio",
  "chest",
  "lower arms",
  "lower legs",
  "neck",
  "shoulders",
  "upper arms",
  "upper legs",
  "waist",
];

export const FilterElement = <T extends {}>({
  helperText,
  selectProps,
  control,
}: FilterElementProps<T>) => {
  return (
    <Controller
      rules={{
        required: selectProps?.required ? "The body parts are required." : undefined,
      }}
      control={control}
      name={(selectProps?.multiple ? "bodyParts" : "bodyPart") as Path<T>}
      render={({ field: { value, onChange } }) => (
        <FormControl fullWidth>
          <InputLabel id="bodyParts-label">Body parts</InputLabel>
          <Select
            {...selectProps}
            labelId="bodyParts-label"
            id="bodyParts"
            value={value || (selectProps?.multiple ? [] : "")}
            label="Body parts"
            onChange={(e) => onChange(e.target.value)}
          >
            {bodyParts.map((bodyPart) => (
              <MenuItem key={bodyPart} value={bodyPart}>
                {bodyPart}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText error={selectProps?.error}>
            {helperText}
          </FormHelperText>
        </FormControl>
      )}
    ></Controller>
  );
};
