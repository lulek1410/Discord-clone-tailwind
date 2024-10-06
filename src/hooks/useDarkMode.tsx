import { useEffect, useState } from "react";

const useLocalStorage = <T,>(key: string, initialValue?: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
};

const useDarkMode = () => {
  const [enabled, setEnabled] = useLocalStorage<boolean>("dark-theme");

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;

    if (enabled) {
      bodyClass.add(className);
    } else {
      bodyClass.remove(className);
    }
  }, [enabled]);

  return [enabled, setEnabled];
};

export default useDarkMode;
