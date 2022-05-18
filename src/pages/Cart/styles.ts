import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  background-color: #f5f5f5;
  max-width: 720px;
  margin: 0 auto;

  border-radius: 0.5rem;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  header {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 80px;

    h2 {
      text-align: center;
    }
  }
`;

export const ItemsContent = styled.div`
  border-top: 2px solid #d3d3d3;
  border-bottom: 2px solid #d3d3d3;

  section {
    margin: 1rem;

    display: flex;
    flex-direction: column;
    gap: 0.45rem;
  }
`;

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

export const OrderConfirmation = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  /* margin: 1rem; */
  padding: 1rem;

  button {
    width: 100%;
    height: 55px;

    border-radius: 0.45rem;
    border: none;
    background-color: #327aff;
    color: white;
    /* padding: 0.75rem; */

    font-weight: 700;
    font-size: 1.375rem;

    @media (max-width: 720px) {
      font-size: 1.2rem;
    }
  }
`;
