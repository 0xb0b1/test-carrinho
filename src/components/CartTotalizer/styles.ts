import styled from "styled-components";
import { darken } from "polished";

export const Totalizer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1rem 0;

  border-bottom: 2px solid #d3d3d3;

  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 1rem;
    min-height: 4.375rem;

    span {
      font-weight: 700;
      font-size: 1.37rem;
    }
  }

  .free-shipping {
    align-self: center;
    min-height: 1.25rem;
    border-radius: 2rem;
    background-color: rgba(158, 234, 112, 0.8);

    padding: 0.45rem 1rem;

    span {
      /* color: #229e22; */
      color: ${darken(0.3, "#36A936")};
      font-weight: 500;
      font-size: 1rem;
    }
  }
`;
