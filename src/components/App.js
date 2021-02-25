import React, { useEffect, useState } from "react";
import "../style.css";
import {connect} from "react-redux"
import {getCountries} from "../actions/index"
import { bindActionCreators } from "redux";
// import axios from "axios";

function App(props) {
  // const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://restcountries.eu/rest/v2/all")
  //     .then(response => setCountries(response.data))
  //     .catch(error => console.log({ error }));
  // }, []);

  useEffect(() => {
    console.log("1111")//test
    props.getCountries()//sayfa açıldığında çalışır tetiklenir
  }, []);

  return (
    <div className="App">
      <h1>React Dersleri</h1>
      <h2>React Router</h2>
      {props.errorMessage=="" ? props.isLoading?<p>Yükleniyor...</p>: props.countries.map(country => {
        return (
          <div key={country.name}>
            <h3>{country.name}</h3>
            <h4>{country.capital}</h4>
            <p>
              <img
                src={country.flag}
                alt={country.name}
                style={{ width: "100px" }}
              />
            </p>
          </div>
        );
      }):<h4>{props.errorMessage.message}</h4>}{console.log("denemeaa")/*test */}
    </div>
  );
}


const mapStateToProps=state=>{//ilk burası çalışır
  console.log("mapStateToProps",state)//test
  
  //stateten gelen verileri burada alırız
  return {
    countries:state.countries,
    isLoading:state.isLoading,
    errorMessage:state.errorMessage
  }
}


const mapDispatchToProps=dispatch=>{
    console.log("mapDispatchToProps",dispatch)//test
    return{
      getCountries:bindActionCreators(getCountries,dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(App)//reducera gider
//aynısı
// export default connect(mapStateToProps,{getCountries})(App)//reducera gider