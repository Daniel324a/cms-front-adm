import { useState, useEffect } from "react";

export const useFetch = (url, method, headers, body) => {
  const isMount = useRef(true);
  const [state, setState] = useState({
    loading: true,
    data: {},
  });

  useEffect(() => {
    fetch(url, { method, headers, body })
      .then(response => response.json())
      .then(data => {
        if (isMount.current) {
          setState({ loading: false, data });
        }
      });
    return (isMount.current = false);
  }, [url, method, headers, body]);

  return state;
};
