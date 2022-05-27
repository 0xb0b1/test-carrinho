import styled from "styled-components";

export const Button = styled.div`
  .product-add {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 40px;
    border-radius: 0.45rem;
    border: 0;
    padding: 0.67rem;
    font-weight: 700;

    color: #fff;
    overflow: hidden;

    transition: background 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  .product-add {
    width: 120px;
    background-color: #327aff;
    color: white;
  }

  .input-quantity {
    /* margin: 0 auto; */
    label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 120px;

      button {
        border: 0;
        background: none;
      }

      .decrement,
      .increment {
        font-size: 1.25rem;
        color: #111;
      }

      input {
        width: 80px;
        border-radius: 0.45rem;
        padding: 0.45rem 1.25rem;
        border: 1px solid #d3d3d3;
        text-align: center;
      }
    }
  }
`;
