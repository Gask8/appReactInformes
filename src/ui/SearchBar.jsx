import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem 1.2rem;
  box-shadow: var(--shadow-sm);
`;

function SearachBar({ setFilter }) {
  const [searchParams, setSearchParams] = useState("");

  function handleChange(e) {
    setSearchParams(e.target.value);
    setFilter(e.target.value);
  }

  return (
    <div>
      <Input
        onChange={handleChange}
        value={searchParams}
        placeholder="Buscar..."
      ></Input>
    </div>
  );
}

export default SearachBar;
