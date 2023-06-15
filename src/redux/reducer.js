import { GET_JOBS,GET_PROYECTS } from "./actions";

const initialState = {
    jobs:false,
    proyects:false,

}

const reducer= (state = initialState, action) =>{
    switch(action.type){
        case GET_JOBS:
        return{
            ...state,
            jobs:action.payload,
        };
        case GET_PROYECTS:
            return{
                ...state,
                proyects:action.payload,
            };
        default:
            return {
        ...state,
      };
    }
    
}

export default reducer;