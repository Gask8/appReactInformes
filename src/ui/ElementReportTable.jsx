import styled from "styled-components";
const StyledElementDiv = styled.div`
  display: flex;
  width: ${(props) => props.$widthporcentage || "30%"};
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  width: 90%;
`;

function ElementReportTable({
  widthPorcentage,
  title,
  contents = [],
  colorHeader,
}) {
  return (
    <StyledElementDiv $widthporcentage={widthPorcentage} className="card">
      <div
        className="card-head"
        style={{
          backgroundColor: colorHeader,
          color: "#fff",
          width: "100%",
          textAlign: "center",
          padding: "10px 0 0 0",
        }}
      >
        <h5 className="card-title">{title}</h5>
      </div>
      <FlexDiv className="card-body">
        {contents.map((x, i) => (
          <div key={i} className="d-flex flex-column align-items-center">
            <p style={{ fontSize: "0.8rem", color: x.color }}>
              <b>
                {x.tittle} {x.icon}
              </b>
            </p>
            {x.content.map((e, i) => (
              <p key={i} style={{ fontSize: "0.75rem" }}>
                {e.text} {e.number} {e.icon}
                {e.number > 0 ? "" : <span className="text-danger">! </span>}
              </p>
            ))}
          </div>
        ))}
      </FlexDiv>
    </StyledElementDiv>
  );
}

export default ElementReportTable;
