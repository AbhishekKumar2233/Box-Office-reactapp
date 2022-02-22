import styled from "styled-components";

export const MainDataWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;

  img {
    min-width: 250px;
    width: 300px;
    max-height: 450px;
    border: 1px solid #ddd;
    border-radius: 40px;
  }
  .text-side {
    margin-left: 20px;
    .summary {
      color: #5f5f5f;
      line-height: 1.5;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    img {
      margin-bottom: 20px;
      margin: auto;
    }
    .text-side {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`;
