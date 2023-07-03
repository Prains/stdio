import ContentZone from "@/components/ui/ContentZone";
import Overlay from "@/components/ui/Overlay";
import { whiteCross } from "@/images/icons";
import Image from "next/image";

const Burger = ({
  burgerShown,
  setBurgerShown,
}: {
  burgerShown: boolean;
  setBurgerShown: Function;
}) => {
  return (
    <Overlay>
      <ContentZone>
        <Image src={whiteCross} alt="две палочки друг в друге" priority />
      </ContentZone>
    </Overlay>
  );
};

export default Burger;
