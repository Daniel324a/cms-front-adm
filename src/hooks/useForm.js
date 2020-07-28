import { useState } from "react";

export const useForm = () => {
  const [inputState, setInputState] = useState({});

  const handleInputChange = ({ target }) =>
    setInputState({
      ...inputState,
      [target.name]: target.value,
    });
  return [inputState, handleInputChange];
};
