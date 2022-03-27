
import { useEffect, useState } from 'react';

function getStorageValue(key, defaultValue) {
  debugger
    if (typeof window !== "undefined") {
      const value = localStorage.getItem(key);
      const initial = value !== null ? value : defaultValue;
      debugger
      return initial;
    }
  }
  
  export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
      debugger
      return getStorageValue(key, defaultValue);
    });
    debugger
  
    useEffect(() => {
      localStorage.setItem(key, value);

    }, [key, value]);
  
    return [value, setValue];
  };