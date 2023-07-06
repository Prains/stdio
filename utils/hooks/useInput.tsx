import { useState } from "react";

const useInput = (initial: string) => {
  const [state, setState] = useState(initial);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
  return [state, onChange];
};

export default useInput;
