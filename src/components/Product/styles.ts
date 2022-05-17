import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  &:not(:last-child) {
    border-bottom: 1px solid #d3d3d3;
  }

  button {
    /* height: 40px; */
    border: none;
    border-radius: 0.25rem;
    padding: 0.67rem;
    background-color: #327aff;
    color: white;
    font-weight: 700;

    transition: 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
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

  img {
    max-height: 120px;
    max-width: 120px;
    height: 100%;
    width: 100%;
    object-fit: cover;

    border-radius: 1rem;

    &:hover {
      transform: scale(1.2);
    }
  }
`;