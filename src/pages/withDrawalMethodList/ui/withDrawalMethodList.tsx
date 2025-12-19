import { RequisitesCardList } from "../../../features";
import { BankSelector } from "../../../features/bankSelector";
import { Requisites } from "../../../features/requisites";
import { VolumeSection } from "../../../features/volumeSections/ui/volumeSections";
import { MethodTabs } from "../../../widgets";

export const WithDrawalMethodList = () => {
  return (
    <div className="withdrawal-layout">
      <MethodTabs />

      <BankSelector />

      <VolumeSection />

      <Requisites checked={true} onChange={() => null} />

      <RequisitesCardList />
    </div>
  );
};
