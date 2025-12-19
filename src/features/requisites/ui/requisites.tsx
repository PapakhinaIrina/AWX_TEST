import { Box, Checkbox, Typography } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { SAVE_REQUISITES } from "../lib";
import { YellowCheckedIcon } from "./styles";

interface IRequisitesProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Requisites: React.FC<IRequisitesProps> = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 12px",
        borderRadius: 2,
      }}
    >
      <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
        Реквизиты
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography sx={{ fontSize: 14, fontWeight: 500, color: "grey" }}>
          {SAVE_REQUISITES}
        </Typography>

        <Checkbox
          checked={props.checked}
          onChange={(e) => props.onChange(e.target.checked)}
          size="small"
          icon={<CheckBoxOutlineBlankIcon sx={{ color: "black" }} />}
          checkedIcon={<YellowCheckedIcon />}
        />
      </Box>
    </Box>
  );
};
