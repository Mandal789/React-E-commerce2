
const ProductReduser = (state, action) => {
  switch (action.type) {
    case "SETLOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "APPDATA":
      const featuredata = action.payload.filter(
        (item) => item.featured === true
      );
      return {
        ...state,
        isLoading: false,
        FeauterProducts: featuredata,
        Products: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "SET_SINGLE_LOADING":
        return {
          ...state,
          isSingleLoading: true,
        };
    case "SINGLE_APPDATA":
          return {
            ...state,
            isSingleLoading: false,
            SingleProduct:action.payload,
          };
    case "SINGLE_ERROR":
       return {
        ...state,
        isSingleLoading: false,
        isError: true,
       };     

    default:
      return state;
  }
};

export default ProductReduser;
