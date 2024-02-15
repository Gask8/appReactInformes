import { useState } from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

function SelectBase({ options, value, onChange, ...props }) {
  return (
    <StyledSelect value={value} {...props} onChange={onChange}>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
}

function LocalitySelector({ options, setValue }) {
  const [searchParams, setSearchParams] = useState("");

  function handleChange(e) {
    setSearchParams(e.target.value);
    setValue(e.target.value);
  }

  return (
    <div>
      <SelectBase
        options={options}
        type="white"
        onChange={handleChange}
        value={searchParams}
      ></SelectBase>
    </div>
  );
}

export default LocalitySelector;
