import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  &:not(:last-child) {
    border-bottom: 2px solid #d3d3d3;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 120px;

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

  img {
    max-height: 120px;
    max-width: 100px;

    border-radius: 1rem;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
