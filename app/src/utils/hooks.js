import React, {useState, useEffect} from 'react';

export function useDebounce(text, delay) {
  const [debounceValue, setDebounceValue] = useState(text);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(text);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [text]);

  return debounceValue;
}
