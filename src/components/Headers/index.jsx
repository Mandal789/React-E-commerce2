import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../modules/Allproducts/index.css";
import { useCartContext } from "../../CartContext/Cart_Context";
import { useAuth0 } from "@auth0/auth0-react";

const navigation = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Product",
    path: "/products",
  },
  {
    id: 3,
    name: "About",
    path: "/about",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
];
const Header = () => {
  const [state, setstate] = useState(true);
  const [state1, setstate1] = useState(true);
  let menuBtn = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuBtn.current.contains(e.target)) {
        setstate(true);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const navigate = useNavigate();
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const { cart } = useCartContext();

  return (
    <>
      <header className="bg-white border-gray-200 dark:bg-gray-900 shadow-xl ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
          <NavLink
            to={"/"}
            className="flex title-font w-[100px] md:w-[200px] font-medium items-center text-gray-900 mb-2 md:mb-0"
          >
            <svg
              width="200.6272583007813"
              height="60.87613136288223"
              viewBox="0 -5 369.72727272727275 130.6857481502671"
              className="css-1j8o68f"
            >
              <defs id="SvgjsDefs12988"></defs>
              <g
                id="SvgjsG12989"
                featurekey="monogramFeature-0"
                transform="matrix(4.103803601316846,0,0,4.103803601316846,56.922237502708626,-185.6221188377226)"
                fill="#9505fb"
              >
                <path d="M6.6 44.94 c-2.22 1.32 -3.18 2.94 -2.82 4.44 c0.3 1.2 1.32 3.42 2.22 6.12 c2.4 -1.92 4.62 -3.36 6.9 -4.38 c0.18 -0.12 0.9 -0.24 1.14 -0.18 c0.48 0.18 -0.12 0.42 -0.48 0.6 c-1.98 0.78 -4.5 2.7 -7.2 5.1 c0.72 2.4 1.32 5.04 1.32 7.8 c0 6.36 -5.34 10.2 -8.82 10.2 c-4.92 0 -5.16 -7.14 2.88 -15.18 c1.14 -1.14 2.22 -2.16 3.24 -3.06 c-0.78 -2.34 -1.74 -4.56 -2.16 -6.3 c-0.9 -3.3 1.26 -5.88 3.06 -6.06 c1.38 -0.18 1.32 0.6 0.72 0.9 z M6.6 63.66 c0 -1.98 -0.54 -4.08 -1.2 -6.12 l-2.58 2.52 c-7.26 7.32 -7.14 13.56 -4.56 13.56 c3.84 0 8.34 -4.44 8.34 -9.96 z"></path>
              </g>
              <g
                id="SvgjsG12990"
                featurekey="nameFeature-0"
                transform="matrix(0.8015836691809141,0,0,0.8015836691809141,95.88900452692062,22.872664827170873)"
                fill="#000000"
              >
                <path d="M13.027 40.39063 c-6.0547 0 -10.781 -2.9102 -11.641 -8.2031 l6.0547 -1.3867 c0.39063 3.1641 2.7148 4.8047 5.8203 4.8047 c2.3828 0 4.2773 -1.0547 4.2578 -3.4375 c-0.019531 -2.6563 -3.1445 -3.4961 -6.582 -4.5508 c-4.1406 -1.2891 -8.5742 -2.8125 -8.5742 -8.0078 c0 -5.2539 4.2969 -8.2227 9.9609 -8.2227 c4.9609 0 9.9609 2.0117 11.094 7.4219 l-5.6641 1.4063 c-0.52734 -2.8125 -2.4219 -4.043 -5.0781 -4.043 c-2.3633 0 -4.375 0.97656 -4.375 3.3008 c0 2.168 2.7734 2.8906 5.9766 3.8477 c4.2578 1.2891 9.2969 2.9297 9.2969 8.5547 c0 5.9961 -5.0195 8.5156 -10.547 8.5156 z M46.77703125 11.777000000000001 l5.8594 0 l0 28.223 l-5.8594 0 l0 -11.602 l-11.934 0 l0 11.602 l-5.8594 0 l0 -28.223 l5.8594 0 l0 11.523 l11.934 0 l0 -11.523 z M72.4410625 40.39063 c-8.3008 0 -14.434 -5.6641 -14.434 -14.512 c0 -8.8672 6.1328 -14.492 14.434 -14.492 c8.2813 0 14.414 5.625 14.414 14.492 c0 8.8477 -6.1328 14.512 -14.414 14.512 z M72.4410625 35.0195 c4.8633 0 8.5938 -3.418 8.5938 -9.1406 c0 -5.7031 -3.7305 -9.1016 -8.5938 -9.1016 s-8.5938 3.3984 -8.5938 9.1016 c0 5.7227 3.7305 9.1406 8.5938 9.1406 z M103.98475 11.777000000000001 c5.5273 0 8.9648 4.1016 8.9648 9.1211 c0 5.1367 -3.4375 8.9844 -8.9648 8.9844 l-5.8789 0 l0 10.117 l-5.8594 0 l0 -28.223 l11.738 0 z M103.00775 24.98 c2.9297 0 4.2969 -1.6211 4.2969 -4.1602 c0 -2.4414 -1.3672 -4.1406 -4.2969 -4.1406 l-4.9023 0 l0 8.3008 l4.9023 0 z M129.60975 11.777000000000001 c5.5273 0 8.9648 4.1016 8.9648 9.1211 c0 5.1367 -3.4375 8.9844 -8.9648 8.9844 l-5.8789 0 l0 10.117 l-5.8594 0 l0 -28.223 l11.738 0 z M128.63275 24.98 c2.9297 0 4.2969 -1.6211 4.2969 -4.1602 c0 -2.4414 -1.3672 -4.1406 -4.2969 -4.1406 l-4.9023 0 l0 8.3008 l4.9023 0 z M143.49605 40 l0 -28.223 l5.8594 0 l0 28.223 l-5.8594 0 z M175.91828125 11.777000000000001 l5.8398 0 l0 28.223 l-6.7773 0 l-12.5 -20.176 l0 20.176 l-5.8398 0 l0 -28.223 l6.6992 0 l12.578 20.059 l0 -20.059 z M201.26915625 40.39063 c-8.1445 0 -14.141 -5.625 -14.141 -14.434 c0 -8.9258 6.1328 -14.57 14.434 -14.57 c5.4492 0 9.9609 2.4023 12.422 6.6406 l-5.1367 2.7344 c-1.4844 -2.8906 -4.1406 -4.2773 -7.2852 -4.2773 c-4.8828 0 -8.5547 3.3594 -8.5547 9.3359 c0 5.7617 3.4375 9.4727 8.7695 9.4727 c3.6133 0 6.9336 -1.7969 7.7344 -5.918 l-7.7148 0 l0 -4.707 l13.262 0 l0 15.332 l-4.6094 0 l0 -3.9063 c-1.8164 2.6758 -4.8633 4.2969 -9.1797 4.2969 z M263.86709375 40 l-5.8398 0 l-1.8555 -21.27 l-7.1484 21.27 l-3.7891 0 l-7.1484 -21.27 l-1.875 21.27 l-5.8594 0 l2.3633 -28.223 l8.3594 0 l6.0156 17.715 l6.0938 -17.715 l8.3594 0 z M288.88665625 40 l-2.0508 -5.8203 l-11.855 0 l-2.0508 5.8203 l-5.9961 0 l10.391 -28.223 l7.168 0 l10.391 28.223 l-5.9961 0 z M276.69965625 29.277 l8.418 0 l-4.1992 -11.973 z M314.02375 40 l-7.3438 -12.422 l-1.6992 0 l0 12.422 l-5.8594 0 l0 -28.223 l10.234 0 c6.3867 0 9.082 3.7695 9.082 8.4375 c0 3.7891 -2.1484 6.25 -5.9766 7.0703 l8.4961 12.715 l-6.9336 0 z M304.98045 16.641 l0 6.7383 l3.457 0 c3.125 0 4.3945 -1.3281 4.3945 -3.3594 c0 -2.0117 -1.2695 -3.3789 -4.3945 -3.3789 l-3.457 0 z M341.6215625 11.777000000000001 l0 5.1563 l-6.6992 0 l0 23.066 l-5.8008 0 l0 -23.066 l-6.7383 0 l0 -5.1563 l19.238 0 z"></path>
              </g>
              <g
                id="SvgjsG12991"
                featurekey="sloganFeature-0"
                transform="matrix(1.388219415790996,0,0,1.388219415790996,141.46455633225418,69.09643483196403)"
                fill="#9505fb"
              >
                <path d="M10.01 8.467 l-5.2344 0 l0 3.2031 l4.6387 0 l0 2.5488 l-4.6387 0 l0 3.1934 l5.2344 0 l0 2.5879 l-8.1836 0 l0 -14.111 l8.1836 0 l0 2.5781 z M19.277371875 20.19531 c-4.1504 0 -7.2168 -2.8223 -7.2168 -7.2559 s3.0664 -7.2461 7.2168 -7.2461 c3.1445 0 5.6641 1.6113 6.6699 4.2871 l-2.7344 0.99609 c-0.625 -1.6406 -2.1191 -2.5879 -3.9355 -2.5879 c-2.4316 0 -4.2969 1.6992 -4.2969 4.5508 s1.8652 4.5605 4.2969 4.5605 c1.8164 0 3.3105 -0.95703 3.9355 -2.5977 l2.7344 0.99609 c-1.0059 2.6758 -3.5254 4.2969 -6.6699 4.2969 z M34.5996375 20.19531 c-4.1504 0 -7.2168 -2.832 -7.2168 -7.2559 c0 -4.4336 3.0664 -7.2461 7.2168 -7.2461 c4.1406 0 7.207 2.8125 7.207 7.2461 c0 4.4238 -3.0664 7.2559 -7.207 7.2559 z M34.5996375 17.5098 c2.4316 0 4.2969 -1.709 4.2969 -4.5703 c0 -2.8516 -1.8652 -4.5508 -4.2969 -4.5508 s-4.2969 1.6992 -4.2969 4.5508 c0 2.8613 1.8652 4.5703 4.2969 4.5703 z M60.673781250000005 20 l-2.9199 0 l-0.92773 -10.635 l-3.5742 10.635 l-1.8945 0 l-3.5742 -10.635 l-0.9375 10.635 l-2.9297 0 l1.1816 -14.111 l4.1797 0 l3.0078 8.8574 l3.0469 -8.8574 l4.1797 0 z M79.9120625 20 l-2.9199 0 l-0.92773 -10.635 l-3.5742 10.635 l-1.8945 0 l-3.5742 -10.635 l-0.9375 10.635 l-2.9297 0 l1.1816 -14.111 l4.1797 0 l3.0078 8.8574 l3.0469 -8.8574 l4.1797 0 z M91.16234375 8.467 l-5.2344 0 l0 3.2031 l4.6387 0 l0 2.5488 l-4.6387 0 l0 3.1934 l5.2344 0 l0 2.5879 l-8.1836 0 l0 -14.111 l8.1836 0 l0 2.5781 z M101.630815625 20 l-3.6719 -6.2109 l-0.84961 0 l0 6.2109 l-2.9297 0 l0 -14.111 l5.1172 0 c3.1934 0 4.541 1.8848 4.541 4.2188 c0 1.8945 -1.0742 3.125 -2.9883 3.5352 l4.248 6.3574 l-3.4668 0 z M97.109415625 8.32 l0 3.3691 l1.7285 0 c1.5625 0 2.1973 -0.66406 2.1973 -1.6797 c0 -1.0059 -0.63477 -1.6895 -2.1973 -1.6895 l-1.7285 0 z M113.496121875 20.19531 c-4.1504 0 -7.2168 -2.8223 -7.2168 -7.2559 s3.0664 -7.2461 7.2168 -7.2461 c3.1445 0 5.6641 1.6113 6.6699 4.2871 l-2.7344 0.99609 c-0.625 -1.6406 -2.1191 -2.5879 -3.9355 -2.5879 c-2.4316 0 -4.2969 1.6992 -4.2969 4.5508 s1.8652 4.5605 4.2969 4.5605 c1.8164 0 3.3105 -0.95703 3.9355 -2.5977 l2.7344 0.99609 c-1.0059 2.6758 -3.5254 4.2969 -6.6699 4.2969 z M130.7521875 8.467 l-5.2344 0 l0 3.2031 l4.6387 0 l0 2.5488 l-4.6387 0 l0 3.1934 l5.2344 0 l0 2.5879 l-8.1836 0 l0 -14.111 l8.1836 0 l0 2.5781 z"></path>
              </g>
            </svg>
          </NavLink>

          <div className="flex items-center justify-between w-[35%] md:order-4 md:w-[20%]">
            <div
              ref={menuBtn}
              className="  flex items-center order-2 justify-evenly w-[97%]  flex-row-reverse md:w-auto md:justify-normal md:order-2"
            >
              <button
                onClick={() => setstate1(!state1)}
                data-collapse-toggle="navbar-user"
                type="button"
                className=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-user"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {state1 ? (
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="3em"
                    viewBox="0 0 384 512"
                  >
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                  </svg>
                )}
              </button>
              {isAuthenticated ? (
                <>
                  <button
                    type="button"
                    onClick={() => setstate(!state)}
                    className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    id="user-menu-button"
                    aria-expanded="false"
                    data-dropdown-toggle="user-dropdown"
                    data-dropdown-placement="bottom"
                  >
                    <img
                      className="w-8 h-8 rounded-full"
                      src={user.picture}
                      alt={user.name}
                    />
                  </button>

                  <div
                    className={`z-50 absolute top-24 md:top-20 ${
                      state ? "hidden " : "block"
                    }  text-base list-none bg-gray-100 divide-y divide-gray-300 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown`}
                  >
                    <div className="px-4 py-3">
                      <span className="block px-4 font-semibold text-violet-600 py-2 text-sm text-gray-900 dark:text-white"> Welcome</span>
                      <span className="block text-sm text-gray-900 dark:text-white">
                        {user.profile.username}
                      </span>
                      <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                        {user.email}
                      </span>
                    </div>
                    <ul className="py-2" aria-labelledby="user-menu-button">
                      <li>
                        <NavLink
                          onClick={() =>
                            logout({
                              logoutParams: {
                                returnTo: window.location.origin,
                              },
                            })
                          }
                          className="block px-4 py-2 text-md text-gray-700 hover:bg-white dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Log out
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <button
                  className="inline-flex items-center    rounded "
                  onClick={() => loginWithRedirect()}
                >
                  <p className="text-2xl text-black mt-1 mb-2 mr-1 hover:underline tracking-wider hover:overline hover:decoration-violet-600">
                    Login
                  </p>

                  <svg
                    stroke="currentColor"
                    fill="black"
                    strokeWidth="0"
                    viewBox="0 0 640 512"
                    height="1.5em"
                    width="1.5em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                  </svg>
                </button>
              )}
            </div>
            <button
              className="  inline-flex items-center  right-40 order-1 rounded    "
              onClick={() => navigate("/cart")}
            >
              <NavLink
                to={"/cart"}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#6d28d9" : "",
                  };
                }}
                className="text-2xl text-black mt-1 mb-2 mr-1 hover:underline tracking-wider hover:overline hover:decoration-violet-600"
              >
                Cart
              </NavLink>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5em"
                viewBox="0 0 576 512"
              >
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>
              <span className="bg-purple-500 w-6 relative rounded-full p-0.9 text-white bottom-3 -left-2 text-center">
                {cart.length}
              </span>
            </button>
          </div>
          <div
            className={`items-center order-3 justify-between ${
              state1 ? "hidden" : "block"
            } w-full md:flex md:w-auto md:order-0`}
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-3 md:p-0   md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navigation.map((nav) => {
                return (
                  <li key={nav.id}>
                    <NavLink
                      key={nav.id}
                      to={nav.path}
                      style={({ isActive }) => {
                        return {
                          color: isActive ? "#6d28d9" : "",
                        };
                      }}
                      className="block py-2 pl-3 pr-4 mt-2  text-gray-50 bg-violet-600  rounded md:mr-5  md:p-0  md:font-normal  md:text-gray-700 md:text-lg md:mb-2 md:hover:overline md:hover:text-gray-700 md:hover:decoration-violet-600 md:bg-white"
                    >
                      {nav.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
