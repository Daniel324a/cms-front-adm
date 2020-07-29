import { useState, useEffect } from "react";

export const useFetch = (url, method, headers, body) => {
  const [state, setState] = useState({
    loading: true,
  });

  useEffect(() => {
    fetch(url, { method, headers, body })
      .then(response => response.json())
      .then(data => setState({ loading: false, data }));
  }, [url, method, headers, body]);

  return state;
};
