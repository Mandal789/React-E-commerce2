import React from "react";
import styled from "styled-components";
import Product from "./grid_product";

const GridView = ({ products }) => {
  return (
    <Wrapper className="section">
      <div
        style={{ width: "95%" }}
        className="container grid grid-three-column"
      >
        {products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4rem 0;

  .container {
    max-width: 120rem;
  }

  .grid {
    gap: 0.2rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      /*/ background-color: rgba(0, 0, 0, 0.5);*/
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.1);
    }
    img {
      max-width: 100%;
      height: 11rem;
      transition: all 0.2s linear;
      border-radius: 6px;
    }
  }

  .card {
    /* background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;*/

    .card-data {
      padding: 0 1rem;
    }

    .card-data-flex {
      margin: 1rem 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    figure img {
      height: 21rem;
    }
  }
`;

export default GridView;
