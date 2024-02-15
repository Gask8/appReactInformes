function ThAJE({ content }) {
  return (
    <>
      {content.map((e, i) => (
        <th colSpan="2" key={i}>
          {e}
        </th>
      ))}
    </>
  );
}

export default ThAJE;
