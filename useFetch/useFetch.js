import { faA } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  const getFetch = async () => {
    setState({ ...state, isLoading: true });
    const resp = await fetch(url);
    const data = await resp.json();

    setState({ data, isLoading: false, error: null });
  };

  const onNextQuote = () => {
    // url = `${url}&rnd=${new Date().toTimeString()}`;
    // console.log("url", url);
    getFetch();
  };

  useEffect(() => {
    getFetch();

    return () => {};
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
    onNextQuote,
  };
};
