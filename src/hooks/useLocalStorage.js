import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    // In the callback function, we'll check to see if the item we passed in already exists in localStorage, and return that value, otherwise we'll return whatever initialValue was passed in.
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    }
    localStorage.setItem(key, JSON.stringify(initialValue));
    console.log("Initial Value :", initialValue);
    return [initialValue]; //returning an array
  });
  const setValue = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };
  return [storedValue, setValue];
};
export default useLocalStorage;
