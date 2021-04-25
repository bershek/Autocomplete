import React, {useState, useRef, useCallback} from 'react'
import {sortAsc, clearStr} from "../utils/utils";
import useDebounce from "./useDebounce";

const useAutocomplete = ({ options }) => {
  const input = useRef('')
  const [matches, setMatches] = useState([]);
  const debouncedMatches = useDebounce(matches, 500);

  const suggest = useCallback((str) => {
    if (!str || str === '') {
      setMatches([]);
      return;
    }

    const pureString = clearStr(str);
    const regex = new RegExp(pureString,'gi');
    const matches = options
      .filter((el) => el.title.match(regex))
      .sort((a, b) => sortAsc(a.title, b.title));
    setMatches(matches);
  }, [options]);

  const onChange = useCallback((e) => {
    if (!e.hasOwnProperty('target')) {
      return console.error('NOT IMPLEMENTED YET')
    }
    const { value } = e.target
    suggest(value);
    input.current = value;
  }, [suggest]);

  const onHintClick = useCallback((e) => {
    input.current = e.target.innerText;
    setMatches(null);
  }, [options]);


  const htmlAttributes = {
    value: input.current,
    onChange,
  }

  return {
    ...htmlAttributes,
    bind: htmlAttributes,
    matches: debouncedMatches,
    onHintClick,
  }
};
export default useAutocomplete;
