"use client";
import useInput from "@/utils/hooks/useInput";
import Input from "../ui/Input";

const SendForm = () => {
  const [tg, tgC] = useInput("");
  const [name, nameC] = useInput("");
  const [phone, phoneC] = useInput("");
  const [email, emailC] = useInput("");

  const submitAction = (e: any) => {
    e.preventDefault();
    const data = {
      tg: tg,
      name: name,
      phone: phone,
      email: email,
    };
  };

  return (
    <form className="flex-center-col gap-7" onSubmit={submitAction}>
      <Input placeholder="Ваше имя" value={name} onChange={nameC} required />
      <Input
        placeholder="Ваш E-mail"
        value={email}
        onChange={emailC}
        required
      />
      <Input
        placeholder="Ваш номер телефона"
        value={phone}
        onChange={phoneC}
        required
      />
      <Input
        placeholder="Ваш псевдоним в Telegram, если есть"
        value={tg}
        onChange={tgC}
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
