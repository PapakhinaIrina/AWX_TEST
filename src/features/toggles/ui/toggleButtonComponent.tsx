import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { toggleButtonSx } from "./styles/styles";

interface IToggleButton {
  value: string;
  onChange: (value: string) => void;
  label: string;
  itemValue: string;
}

export const ToggleButtonComponent: React.FC<IToggleButton> = (props) => {
  return (
    <ToggleButtonGroup
      value={props.value}
      exclusive
      onChange={(_, value) => {
        if (value !== null) {
          props.onChange(value);
        }
      }}
      sx={{ gap: 1 }}
    >
      <ToggleButton sx={toggleButtonSx} value={props.itemValue}>
        {props.label || ""}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
