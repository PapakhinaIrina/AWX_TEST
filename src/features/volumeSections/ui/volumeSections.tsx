import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import { AmountInput } from "../../../widgets/inputs";
import { SegmentedProgress } from "../../../widgets/progress";

export const VolumeSection = () => {
  const [eth, setEth] = useState(1300);
  const [rub, setRub] = useState(1200);

  return (
    <Stack spacing={2}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Объемы
      </Typography>

      <Stack direction="row" spacing={2}>
        <AmountInput
          label="Отдаете (лот 1000)"
          currency="Ethereum, ETH"
          value={eth}
          onChange={setEth}
        />
        <AmountInput
          label="Получаете (лот 1000)"
          currency="Рубль, RUR"
          value={rub}
          onChange={setRub}
        />
      </Stack>

      <SegmentedProgress value={50} />
    </Stack>
  );
};
