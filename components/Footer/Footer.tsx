import Link from "next/link";
import LinkButton from "../ui/Button";
import { routes } from "@/utils/routes";
import ContentZone from "../ui/ContentZone";

const Footer = () => {
  const contactsList = [
    {
      name: "bakhtin.work2021@gmail.com",
      link: "mailto:bakhtin.work2021@gmail.com",
    },
    {
      name: "@webcultstudio",
      link: "https://t.me/webcultstudio",
    },
  ];
  return (
    <footer>
      <ContentZone>
        <article className="flex-center mt-10">
          <ul className="flex-center-col gap-5">
            <p className="text-bold !text-pink-600">Свяжитесь с нами</p>
            {contactsList.map((item, index) => {
              return (
                <Link key={index} href={item.link} target="_blank">
                  {item.name}
                </Link>
              );
            })}
          </ul>
        </article>
        <LinkButton
          href={routes.popUpSendMessage}
          className="mx-auto mt-10 h-10 md:h-20"
        >
          связаться
        </LinkButton>
      </ContentZone>
    </footer>
  );
};

export default Footer;
