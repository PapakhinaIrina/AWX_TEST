import { useState } from "react";
import { RequisitesCard } from "../../../widgets";
import {
  ADDRESS,
  CARD_NUMBER,
  CONTRACT_NUMBER,
  FULL_NAME,
  TCheckedLabel,
} from "../lib";

export const RequisitesCardList = () => {
  const [checkedLabel, setCheckedLabel] = useState<TCheckedLabel>("card");
  return (
    <div>
      <RequisitesCard
        label={checkedLabel === "card" ? CARD_NUMBER : CONTRACT_NUMBER}
        showSelector={true}
        radioTitles={{
          leftRadio: CARD_NUMBER,
          rightRadion: CONTRACT_NUMBER,
          setCheckedLabel: setCheckedLabel,
        }}
      />
      <RequisitesCard label={FULL_NAME} showSelector={false} />
      <RequisitesCard label={ADDRESS} showSelector={false} />
    </div>
  );
};
