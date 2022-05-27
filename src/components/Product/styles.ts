import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  height: 200px;

  padding: 0.45rem;

  &:not(:last-child) {
    border-bottom: 2px solid #d3d3d3;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;

  section {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    .name {
      font-weight: 700;
      font-size: 14px;

      @media (max-width: 720px) {
        font-size: 12px;
      }
    }

    .price {
      font-weight: 500;
      font-size: 14px;
      color: gray;
    }

    .selling-price {
      font-weight: 500;
      font-size: 18px;
      color: black;
    }
  }

  .image {
    max-width: 140px;
    width: 100%;
    height: 100%;

    img {
      max-width: 120px;

      border-radius: 1rem;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;
