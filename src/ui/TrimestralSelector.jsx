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
        <option key={i} value={i}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
}

function TrimestralSelector({ options, setValue, value }) {
  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div>
      <SelectBase
        options={options}
        type="white"
        onChange={handleChange}
        value={value}
      ></SelectBase>
    </div>
  );
}

export default TrimestralSelector;
