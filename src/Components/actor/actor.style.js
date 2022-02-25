import styled from "styled-components";
import { SearchCard } from "../styled";

export const StyleActorCard = styled(SearchCard)`
  .birthday {
    margin: 0;
    margin-top: 2px;
    font-weight: bold;
    padding: 2px;
  }
  .btns {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      text-decoration-color: #000;
      color: #000;
      &:hover {
        text-decoration-color: blue;
        color: blue;
      }
    }
    button {
      outline: none;
      border: 1px solid #8e8e8e;
      border-radius: 15px;
      padding: 5px 15px 0px 15px;
      background-color: #fff;
      display: block;
      justify-content: center;
      align-items: center;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
