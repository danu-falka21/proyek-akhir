const initialState = {
    dataMahasiswa: [],
  };
  
  const form = (state = initialState, action) => {
    switch (action.type) {
      case "ADD FORM":
        return {
          ...state,
          dataMahasiswa: [...state.dataMahasiswa, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default form;