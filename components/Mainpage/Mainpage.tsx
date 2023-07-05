import ContentZone from "../ui/ContentZone";
import WhiteLine from "../ui/whiteLine";
import CasesBlock from "./CasesBlock/CasesBlock";
import FreeConsultationBlock from "./FreeConsultationBlock/FreeConsultationBlock";
import LeadImageBlock from "./LeadImageBlock/LeadImageBlock";
import LeadTextBlock from "./LeadTextBlock/LeadTextBlock";
import MainBlock from "./MainBlock/MainBlock";
import WorkDescriptionBlock from "./WorkDescriptionBlock/WorkDescriptionBlock";

const MainpageComponent = () => {
  return (
    <main>
      <ContentZone>
        <MainBlock />
        <WhiteLine />
        <LeadTextBlock />
        <WhiteLine />
        <CasesBlock />
        <LeadImageBlock />
        <WhiteLine />
        <WorkDescriptionBlock />
        <FreeConsultationBlock />
      </ContentZone>
    </main>
  );
};

export default MainpageComponent;
