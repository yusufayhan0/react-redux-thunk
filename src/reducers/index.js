const INITIAL_STATE={
    isLoading:false,
    countries:[],
    errorMessage:""
}


export const reducer=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case "GET_COUNTRIES_START":
            console.log("isloading")
            return {...state,isLoading:true,errorMessage:""}
        case "GET_COUNTRIES_SUCCESS":
            return {...state,countries:action.payload,isLoading:false}
        case "ERROR":
            console.log("yusuf ayhan")
            return {...state,errorMessage:action.payload,isLoading:false}

        default:
           return state
    }
}