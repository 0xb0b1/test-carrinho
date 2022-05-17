import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    border: none;
    background: none;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  /* margin: 0 1rem; */

  /* height: 120px; */
  /* height: 100%; */

  img {
    border: 2px solid #d3d3d3;
    border-radius: 0.1rem;

    max-height: 120px;
    max-width: 120px;
    height: 100%;
    width: 100%;

    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;

    .name {
      font-weight: 700;
    }

    .price {
      font-weight: 500;
      font-size: 12px;
      color: gray;
    }

    .selling-price {
      font-weight: 500;
      font-size: 14px;
      color: black;
    }
  }
`;
