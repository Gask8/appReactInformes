import React from "react";

function TfMF({ times }) {
  return (
    <>
      {[...Array(times)].map((e, i) => (
        <React.Fragment key={i}>
          <td>F</td>
          <td>M</td>
        </React.Fragment>
      ))}
    </>
  );
}

export default TfMF;
