import ContentZone from "../ui/ContentZone";
import WhiteLine from "../ui/whiteLine";
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
      </ContentZone>
    </main>
  );
};

export default MainpageComponent;
