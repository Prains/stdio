"use client";
import useInput from "@/utils/hooks/useInput";
import Input from "../ui/Input";
import { useRouter } from "next/navigation";
import { routes } from "@/utils/routes";

const SendForm = () => {
  const [tgi, tgC] = useInput("");
  const [name, nameC] = useInput("");
  const [phone, phoneC] = useInput("");
  const [email, emailC] = useInput("");
  const router = useRouter();

  const tg = {
    token: process.env.NEXT_PUBLIC_BOT_TOKEN,
    chat_id: 5305278775,
  };

  const submitAction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = `заява. tg ${tgi} имя ${name} ${phone} ${email}`;
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${text}`;
    fetch(url).then(() => {
      router.push(routes.messageSent);
    });
  };
  return (
    <form className="flex-center-col gap-7" onSubmit={submitAction}>
      <Input
        placeholder="Ваше имя"
        value={name}
        onChange={nameC}
        required
        type="text"
      />
      <Input
        placeholder="Ваш E-mail"
        value={email}
        onChange={emailC}
        required
        type="email"
      />
      <Input
        placeholder="Ваш номер телефона"
        value={phone}
        onChange={phoneC}
        required
        type="phone"
      />
      <Input
        placeholder="Ваш псевдоним в Telegram, если есть"
        value={tgi}
        onChange={tgC}
        type="text"
      />
      <button
        type="submit"
        className={`flex-center h-[40px] w-[280px] rounded-full bg-[#CF1585] text-[12px] font-medium uppercase text-zinc-100 transition-all hover:bg-[#F1F1F1] hover:text-neutral-800  md:h-[80px] md:w-[560px] md:text-[20px] md:font-bold`}
      >
        ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
      </button>
    </form>
  );
};

export default SendForm;
