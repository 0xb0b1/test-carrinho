import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  button {
    border: none;
    background: none;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  width: 100%;

  img {
    border: 2px solid #d3d3d3;
    border-radius: 0.1rem;

    max-height: 120px;
    max-width: 120px;
    height: 100%;
    width: 100%;

    object-fit: cover;
  }

  .product-details {
    display: flex;
    justify-content: center;
    flex-direction: column;

    .name {
      font-weight: 700;
      font-size: 0.95rem;
    }

    .price {
      font-weight: normal;
      font-size: 14px;
      color: #706d6d;
    }

    .selling-price {
      font-weight: 500;
      font-size: 18px;
      color: black;
    }
  }
`;
