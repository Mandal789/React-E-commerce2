import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FormatPrice from "../Helpers/FormatPrice";
import { Button } from "./Button";

const ListView = ({ products }) => {
  return (
    <Wrapper className="section">
      <div className="container grid">
        {products.map((curElem, index) => {
          const { id, name, image, price, description } = curElem;
          return (
            <div
              key={index}
              style={{ width: "86%", gap: 0, border: "none" }}
              className="card grid grid-two-column"
            >
              <figure>
                <img src={image} alt={name} />
              </figure>

              <div className="card-data">
                <h3>{name}</h3>
                {/* <p className="pp">
                  <FormatPrice price={price} />
                </p> */}
                <p>{description.slice(0, 90)}...</p>

                <NavLink to={`/product/${id}`} className="btn-main">
                  <Button
                    style={{ textTransform: "capitalize" }}
                    className="btn"
                  >
                    Read More
                  </Button>
                </NavLink>
              </div>
            </div>
          );
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
    gap: 2.2rem;
  }

  figure {
    /*width: auto;*/
    width: 80%;
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
      /* background-color: rgba(0, 0, 0, 0.5);*/
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.3);
    }
    img {
      max-width: 90%;
      /* margin-top: 1.5rem; */
      height: 10rem;
      transition: all 0.2s linear;
      transform: scale(1.2);
    }
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);

    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 0.5rem 0;
      font-weight: 400;
      font-size: 2rem;
      text-transform: capitalize;
    }

    .btn {
      /*margin: 2rem 0;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);*/
      margin: 0.5rem 0px;
      background-color: rgb(10 232 229);

      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      color: rgb(0 0 0);
      padding: 5px 12px;

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

    .btn-main .btn:hover {
      color: #fff;
    }
  }
`;

export default ListView;
