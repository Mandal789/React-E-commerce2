import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../contextApi_store/ProductContext";
import FormatPrice from "../../Helpers/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import MyImage from "../../components/MyImage";
import Star from "../../components/Star";
import AddToCart from "../../components/AddToCart";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getsingleproduct, isSingleLoading, SingleProduct } =
    useProductContext();

  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = SingleProduct;

  useEffect(() => {
    getsingleproduct(`${API}?id=${id}`);
  }, []);
  if (isSingleLoading) {
    return <div className="page_loading">Loading.....</div>;
  }
  return (
    <Wrapper>
      {/* <PageNavigation title={name} /> */}
      <Container className="container">
        <div style={{ gap: "5rem" }} className="grid grid-two-column">
          {/* product Images  */}
          <div className="product_images">
            <MyImage imgs={image} />
          </div>

          {/* product data  */}
          <div className="product-data">
            <h2
              style={{ marginTop: "-27px", fontSize: "3.4rem" }}
              className="hh2"
            >
              {name}
            </h2>
            <Star stars={stars} reviews={reviews} />
            <p className=" pp product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className=" pp product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={price} />
            </p>
            <p className="pp">{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className=" product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p className="">30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p className="pp"> Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p className="pp">1 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p className="pp">
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>

              <p className="pp">
                Brand :<span> {company} </span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart product={SingleProduct} />}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 0rem 12rem;
`;

const Wrapper = styled.section`
  .container {
    padding: 9rem 3rem;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: -webkit-center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
