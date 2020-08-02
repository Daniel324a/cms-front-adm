import { useState, useEffect, useRef } from 'react';

export const useFetch = (url, method, headers, body) => {
  const isMount = useRef(true);
  const [state, setState] = useState({
    loading: true,
    data: {},
  });

  useEffect(() => {
    return () => (isMount.current = false);
  }, []);

  useEffect(() => {
    fetch(url, { method, headers, body })
      .then((response) => response.json())
      .then((response) => {
        if (isMount.current) {
          setState({ loading: false, data: response });
        }
      });
  }, [url, method, headers, body]);

  return state;
};
