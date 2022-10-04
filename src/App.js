// // import logo from './logo.svg';
// // import "bootstrap.dist/css/bootstrap.min.css"
// import { useEffect, useState } from 'react';
// import './App.css';
// // import axios froom "axios";

// // import Game from './components/Game';

// function App() {
//   const[data,setdata]=useState({})

//   const getweatherdetails =() =>{
//     const api=url("");
//     axios.get(api).then((res)={
//       console.log("response",res)

//     }).catch((err)=>{
//       console.log("err",err)
//     })
//   }
//   useEffect(()=>{
// getweatherdetails("delhi");
//   },[])
//   return (
//     <div className="App">
//   <div className="col-md-12">
//     <div className="weathe">
//       <h1>Weather App</h1>
      
//       <input type="text" className="form-control"/>
//       <button className='btn btn-primary' type='button'>Search</button>
//     </div>
//   </div>
//      <div className='col-md-12 text-ccenter mt-5' >
//       <div className='weatherresultbox'>
//        <h5>Delhi</h5>
//        <h6>18  celcius</h6>
//       </div>
//      </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import Game from './components/Game';

function App() {
  return (
   <Game />
  );
}

export default App;
