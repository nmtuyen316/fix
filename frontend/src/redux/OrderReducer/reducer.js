import * as types from './actionType';
const init = {
    infoOrder:{},
    isLoading:false,
    isError:false,
}
const reducer = (state = init,action)=>{
    const {type,payload} = action;
    switch(type){
        case types.ORDER_R:{
            return{
                ...state,
                isLoading:true,
                isError:false,
            };
        }
        case types.ORDER_S:{
            return{
                ...state,
                isLoading:false,
                isError:false,
                infoOrder:payload,
            };
        }
        case types.ORDER_F:{
            return{
                isLoading:false,
                isError:true,
            };
        }
        default:
            return state;
    }
}
export {reducer};