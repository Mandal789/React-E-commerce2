import "./App.css";
import Header from "./components/Headers";
import Home from "./modules/Home";
import Footer from "./components/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Contact from "./components/contact";
import { GlobalStyle } from "./styledComponed/GlobalStyle";
import { ThemeProvider } from "styled-components";
import SingleProduct from "./modules/productDetails/SingleProduct";
import All_products from "./components/All_Products";
import Cart from "./modules/Cart/Cart";

function App() {
  const navigate = useNavigate();
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29,29,29,0.8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "#F6F8FA",
      footer_bg: "0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <div>
      <Header />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/products" element={<All_products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route
            path="/working"
            element={
              <div className="bg-red-50 myfont  font-semibold mywidth text-center p-48 text-4xl text-amber-500">
                Now that page is in progress
                <br />
                we are sorry for the inconvenience <br />
                404 page not found! <br />
                <button
                  className="px-4 py-1 ml-[5%] mt-3 text-xl bg-cyan-400  text-gray-800 rounded hover:bg-violet-500 hover:text-white"
                  onClick={() => navigate("/")}
                >
                  Go Back
                </button>
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div className=" bg-red-50 mywidth text-center p-48 text-4xl font-semibold text-red-600">
                {" "}
                404 page not found!
                <br />
                Ohh Somthing Went Worng!! <br />
                Sorry, the page you tried cannot be found <br />
                <button
                  className="px-4 py-1 ml-[5%] mt-3 text-xl bg-cyan-400  text-gray-800 rounded hover:bg-violet-500 hover:text-white"
                  onClick={() => navigate("/")}
                >
                  Go Back
                </button>
              </div>
            }
          />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
