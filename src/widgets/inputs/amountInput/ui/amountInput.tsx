import { Box, IconButton, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

interface IAmountInputProps {
  label: string;
  currency: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export const AmountInput: React.FC<IAmountInputProps> = (props) => {
  const handleChange = (value: number) => {
    if (!value || !props.min) return;

    const max = props.max;
    const val = Number(value);
    if (Number.isNaN(val)) return;
    if (val < props.min) return;
    if (max !== undefined && val > max) return;
    props.onChange(val);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography fontSize={12} color="text.secondary" mb={0.5}>
        {props.label}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          border: "1px solid #d1d5db",
          px: 1,
        }}
      >
        <Typography fontSize={12} color="text.secondary" mt={0.5}>
          {props.currency}
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <IconButton
            size="small"
            onClick={() => handleChange(props.value - 1)}
            sx={{ width: 32, height: 32 }}
          >
            <RemoveIcon fontSize="small" />
          </IconButton>

          <input
            value={props.value}
            onChange={(e) => handleChange(Number(e.target.value))}
            inputMode="numeric"
            className="amount-input"
          />

          <IconButton
            size="small"
            onClick={() => handleChange(props.value + 1)}
            sx={{ width: 32, height: 32 }}
          >
            <AddIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
