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
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  width: 100%;

  .image {
    max-width: 80px;

    img {
      max-width: 80px;
      width: auto;
      height: auto;
      object-fit: cover;

      border: 1px solid #d3d3d3;
      border-radius: 1rem;

      &:hover {
        transform: scale(1.05);
      }
    }
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
