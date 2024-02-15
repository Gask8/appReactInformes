import { useContext } from "react";
import { createContext } from "react";

const AItemContexts = createContext();

function Accordion({ children, id }) {
  return (
    <div className="accordion" id={id}>
      {children}
    </div>
  );
}

function Item({ children, idName }) {
  return (
    <AItemContexts.Provider value={{ idName }}>
      <div className="accordion-item">{children}</div>
    </AItemContexts.Provider>
  );
}

function Header({ children }) {
  const { idName } = useContext(AItemContexts);
  return (
    <h6 className="accordion-header" id={`${idName}-header`}>
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#${idName}-collapse`}
        aria-expanded="false"
        aria-controls={`${idName}-collapse`}
      >
        {children}
      </button>
    </h6>
  );
}

function Content({ children }) {
  const { idName } = useContext(AItemContexts);
  return (
    <div
      id={`${idName}-collapse`}
      className="accordion-collapse collapse"
      aria-labelledby={`${idName}-header`}
    >
      <div className="accordion-body">{children}</div>
    </div>
  );
}

Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Content = Content;

export default Accordion;
