

const INITIAL_STATE={
    count:0
}


const counterReducer=(state=INITIAL_STATE,action)=>{

    switch(action.type){
        case "INCREMENT_COUNTER":
            return {...state,count:state.count+1}
        break;
        case "DECREMENT_COUNTER":
            return {...state,count:state.count-1}
        break;
        default:
            return
        break;
    }
}

export default counterReducer;