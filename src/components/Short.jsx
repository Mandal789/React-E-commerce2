import React from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../FilterContext/Filter_Context";

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView, sorting } =
    useFilterContext();
  return (
    <Wrapper className="sort-section">
      <div className="sorting-list--grid">
        <button
          className={grid_view ? "active mysort-btn" : "mysort-btn"}
          onClick={setGridView}
        >
          <BsFillGridFill className="icon" />
        </button>

        <button
          className={!grid_view ? "active mysort-btn" : " mysort-btn"}
          onClick={setListView}
        >
          <BsList className="icon" />
        </button>
      </div>

      <div className=" hrflex product-data">
        <p
          style={{ fontSize: "1.2rem" }}
        >{`${filter_products.length} Product Available`}</p>
      </div>
      <div style={{ width: "37%" }} className="hrflex">
        <hr style={{ border: "none", color: "black" }} />
      </div>

      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort" style={{ opacity: 0.7 }}>
            Sort By
          </label>
          <select
            style={{ borderRadius:'30px' }}
            name="sort"
            id="sort"
            className="sort-selection--style"
            onClick={sorting}
          >
            <option value="a-z">Name( A-Z )</option>
            <option value="#" disabled></option>
            <option value="z-a">Name( Z-A )</option>
            <option value="#" disabled></option>
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  
  hr {
    
    max-width: 100%;
    width: 100%;
    border: 0.1rem solid #000;
    color: red;
  }
  .hrflex{
    display: flex;
    justify-content: center;
    align-items: center;
}
  }
  .sorting-list--grid {
    display: flex;
    gap: 2rem;
    align-items: center;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    
.mysort-btn{
  display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
  width: 26%;
  height: 10%;
  border-radius: 5px;
  border: 1px solid;
  padding: 14px 6px;
}
}
    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    /*padding: 0.5rem;*/
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    hr {
      display:none;
    }
    .sorting-list--grid{
      gap: 7rem
     
    }
    
  }
`;

export default Sort;
