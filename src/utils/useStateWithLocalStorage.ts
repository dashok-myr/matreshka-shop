import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function useStateWithLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [state, setState] = useState<T>(initialValue);

  useEffect(() => {
    const item = window.localStorage.getItem(key);

    if (item) {
      setState(JSON.parse(item) as T);
    }
  }, [key]);

  const setValue = (value: T) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setState(value);
    } catch (error) {
      console.log(error);
    }
  };

  return [state, setValue] as [T, Dispatch<SetStateAction<T>>];
}
