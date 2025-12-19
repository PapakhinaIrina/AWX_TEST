import {
  Box,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  styled,
  Typography,
} from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { Dispatch, SetStateAction } from "react";
import { TCheckedLabel } from "../../../features/requisitesCardList/lib";
import { checkedIcon, uncheckedIcon } from "./styles";

const YellowBlackRadio = styled(Radio)(({ theme }) => ({
  // unchecked state
  color: "black", // цвет обводки когда не выбрано
  "& .MuiSvgIcon-root": {
    fontSize: 24,
  },
  // checked state
  "&.Mui-checked": {
    color: "yellow", // внешнее кольцо — жёлтое
  },
  // центральная точка (внутренний круг) при checked
  "&.Mui-checked .MuiSvgIcon-root circle:last-of-type": {
    fill: "black", // центр — чёрный
  },
}));

interface IRequisitesCardProps {
  showSelector: boolean;
  label: string;
  value?: any;
  onChange?: (value: any) => void;
  onEdit?: () => void;
  radioTitles?: {
    leftRadio: string;
    rightRadion: string;
    setCheckedLabel: Dispatch<SetStateAction<TCheckedLabel>>;
    checkedLabel?: string;
  };
}

export const RequisitesCard: React.FC<IRequisitesCardProps> = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: 3,
        padding: 2,
        boxShadow: "0 0 0 1px #EEE",
        marginBottom: 4,
      }}
    >
      {props.showSelector && (
        <RadioGroup
          row
          value={props.radioTitles?.checkedLabel}
          onChange={(e) =>
            props.radioTitles?.setCheckedLabel(e.target.value as TCheckedLabel)
          }
          sx={{ gap: 3 }}
        >
          <FormControlLabel
            value="card"
            control={
              <Radio
                size="small"
                icon={uncheckedIcon}
                checkedIcon={checkedIcon}
              />
            }
            label={props.radioTitles?.leftRadio}
          />

          <FormControlLabel
            value="contract"
            control={
              <Radio
                size="small"
                icon={uncheckedIcon}
                checkedIcon={checkedIcon}
              />
            }
            label={props.radioTitles?.rightRadion}
          />
        </RadioGroup>
      )}

      <Box
        sx={{
          mt: props.showSelector ? 1.5 : 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: 500,
          }}
        >
          {props.label}
        </Typography>

        <IconButton size="small" onClick={props.onEdit}>
          <DriveFileRenameOutlineIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
