import ContentZone from "../ui/ContentZone";
import WhiteLine from "../ui/whiteLine";
import CasesBlock from "./CasesBlock/CasesBlock";
import LeadImageBlock from "./LeadImageBlock/LeadImageBlock";
import LeadTextBlock from "./LeadTextBlock/LeadTextBlock";
import MainBlock from "./MainBlock/MainBlock";

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
      </ContentZone>
    </main>
  );
};

export default MainpageComponent;
