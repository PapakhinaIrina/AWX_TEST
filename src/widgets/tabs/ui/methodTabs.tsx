import { useState } from "react";
import { TMethodType } from "../../../shared/lib/types/methodTypes";
import { ToggleButtonComponent } from "../../../features";
import { Typography } from "@mui/material";

export const MethodTabs = () => {
  const [method, setMethod] = useState<TMethodType>("BANK");

  const handleChange = (value: string) => {
    switch (value) {
      case "BANK":
        setMethod("BANK");
        break;

      case "CASH":
        setMethod("CASH");
        break;

      case "COURIER":
        setMethod("COURIER");
        break;

      default:
        break;
    }
  };

  return (
    <div className="flex flex-col">
      <Typography>Способ вывода</Typography>
      <ToggleButtonComponent
        value={method}
        onChange={handleChange}
        label="Банки"
        itemValue="BANK"
      />
      <ToggleButtonComponent
        value={method}
        onChange={handleChange}
        label="Наличные"
        itemValue="CASH"
      />
      <ToggleButtonComponent
        value={method}
        onChange={handleChange}
        label="Курьер"
        itemValue="COURIER"
      />
    </div>
  );
};
