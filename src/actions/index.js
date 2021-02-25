import axios from "axios";

export const getCountries = () => 
    (dispatch) => {
        console.log(dispatch)//test
        console.log("aaaaaa")//test
        dispatch({type:"GET_COUNTRIES_START"})
        axios
            .get("https://restcountries.eu/rest/v2/all")
            .then(response => dispatch({ type: "GET_COUNTRIES_SUCCESS", payload: response.data }))
            .catch(error => dispatch({ type: "ERROR", payload: error }));
    }