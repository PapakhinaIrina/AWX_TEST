import {
  Card,
  CardContent,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const BankSelector = () => {
  return (
    <Card variant="elevation">
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack>
            <Typography>Альфа-банк cash-in</Typography>
            <Typography variant="caption" color="text.secondary">
              1 USDT = 61.55 RUB
            </Typography>
          </Stack>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
};
