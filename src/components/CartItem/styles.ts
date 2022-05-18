import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  button {
    display: flex;
    gap: 0.45rem;
    align-items: center;
    justify-content: center;

    width: 120px;
    height: 40px;
    border-radius: 1.25rem;
    border: 0;
    padding: 0.67rem;
    font-weight: 700;

    background-color: #d33033;

    color: #f5f5f5;
    overflow: hidden;

    transition: background 0.2s;

    &:hover {
      filter: brightness(0.8);
    }

    span {
      font-weight: 700;
      font-size: 12px;
    }
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
