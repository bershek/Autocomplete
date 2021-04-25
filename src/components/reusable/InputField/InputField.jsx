import { useCallback } from 'react';
import useAutocomplete from "../../../hooks/useAutocomplete";
import Suggest from "../Suggest/Suggest";

const InputField = ({ options }) => {
  const {
    onChange: handleEmailChange,
    bind,
    matches,
    onHintClick,
  } = useAutocomplete({
    options,
  });

  const handleChange = useCallback((e) => handleEmailChange(e), [options]);
  return (
    <div className="container">
      <input
        {...bind}
        onChange={handleChange}
        className="field"
      />
      <Suggest matches={matches} onHintClick={onHintClick} />
    </div>
    )
}

export default InputField;
