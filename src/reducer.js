import { useState } from "react";
export const initialState = {
  post: ""
 
};



const reducer = (state, action) => {
  // const [Index, setIndex] = useState();
  // const [NewBasket, setnewBasket] = useState();
  // console.log(action);
  switch (action.type) {
    case "POST_INFO":
      return {
        
        post: action.item
      };
   
    default:
      return state;
  }
};

export default reducer;
// export { NewBasket, Index };
