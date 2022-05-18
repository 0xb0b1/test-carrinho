import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px 0;

  a {
    transition: opacity 0.2s;
    text-decoration: none;
    color: white;

    span {
      font-size: 2rem;
      font-weight: 700;
      color: #fff;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #f5f5f5;
    }

    span {
      font-size: 12px;
      color: #f1f1f1;
    }
  }
`;
