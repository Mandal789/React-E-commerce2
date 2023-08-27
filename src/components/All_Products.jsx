import React from "react";
import styled from "styled-components";
import FilterSection from "./FilterSection";
import Short from "./Short";
import ProductList from "./ProductList";
//import { useFilterContext } from "../FilterContext/Filter_Context";
const Products = () => {
  //const { filter_products } = useFilterContext();

  return (
    <Wrapper>
      <div className="flex flex-col text-center w-full mt-10 ">
        <h2 className="text-xs text-purple-500 tracking-widest font-medium title-font mb-1">
          Product
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          All products
        </h1>
      </div>
      <div
        style={{ width: "95%" }}
        className="container grid grid-filter-column"
      >
        <div style={{ marginLeft: "80px" }}>
          <FilterSection />
        </div>
        <section style={{ gap: "2rem" }} className="product-view--sort">
          <div className="sort-filter">
            <Short />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
      width: 100%;
    }
  }
`;

export default Products;
