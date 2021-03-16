import React from 'react';
import logo from './logo.svg';
//import './App.css';
//import PropTypes from 'prop-types';
import FunctionalComp from './Components/FunctionalComponent';
import {ClassComp, ClassComp1} from './Components/ClassComponent';
import Click from './Components/Click.js';
import Counter from './Components/Counter';
import ParentComp from './Components/ParentComp';

import XCk from './Components/XCk';
import XCn from './Components/XCn';
import XParCmp from './Components/XParCmp';

function App(){
  return(
    <div>
    <h1>Narod Narod</h1>
    <h1>React JS tutorial</h1>
    <FunctionalComp />
    <ClassComp />
    <ClassComp1 />
    <br></br>
    <Click />
    <Counter />    
    <br></br>
    <br></br>
    <ParentComp />
    <br></br>
    <XCk />
    <XCn />
    <XParCmp />
    </div>
  );
}


// function App() {
//   return (
//     <div className="App">
//      <h1>“Happy-Learning-React"</h1>
//      <button>tip na</button>
//      <circle>d</circle>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <table style={{width:"50%"}}>
//       <tr>
//       <th style={{backgroundColor:"cyan"}}>Employee ID</th>
//       <th style={{backgroundColor:"cyan"}}>Employee Name</th>
//       <th style={{backgroundColor:"cyan"}}>Employee Email ID</th>
//       </tr>
//       <tr> 
//         <td>1</td>
//         <td>Ayan</td>
//         <td>ayan@wipro.com</td>
//       </tr>
//       <tr> 
//         <td>2</td>
//         <td>Bedangshu</td>
//         <td>bedangshu@wipro.com</td>
//       </tr>
//       <tr> 
//         <td>3</td>
//         <td>Krishanu</td>
//         <td>krishanu@wipro.com</td>
//       </tr>
//       <tr> 
//         <td>4</td>
//         <td>Sayan</td>
//         <td>sayan@wipro.com</td>
//       </tr>
//       <tr> 
//         <td>5</td>
//         <td>Rahul</td>
//         <td>rahul@wipro.com</td>
//       </tr>
//       </table>
//     </div>
//   );
// }

// class App extends React.Component  {
//   render(){
//   return (
//     <div>
//      <table>
//       <tr>
//         <th>Multiplication of 5</th>
//       </tr>

//       <tr><td>5 X 1 =  {this.props.propNumber * 1}</td> </tr>
//       <tr><td>5 X 1 =  {this.props.propNumber * 2}</td> </tr>
//       <tr><td>5 X 1 =  {this.props.propNumber * 3}</td> </tr>
//       <tr><td>5 X 1 =  {this.props.propNumber * 4}</td> </tr>
//       <tr><td>5 X 1 =  {this.props.propNumber * 5}</td> </tr>
//       <tr><td>5 X 1 =  {this.props.propNumber * 6}</td> </tr>
//       <tr><td>5 X 1 =  {this.props.propNumber * 7}</td> </tr>
//       <tr><td>5 X 1 =  {this.props.propNumber * 8}</td> </tr>
//       <tr><td>5 X 1 =  {this.props.propNumber * 9}</td> </tr>
//       <tr><td>5 X 1 =  {this.props.propNumber * 10}</td> </tr>
//       <tr><td>Bond. {this.props.propString}</td></tr>
//       <tr><td>Team {this.props.propArray[3]}</td></tr>


//     </table>
//   </div>
//   );
//   }
// }


// App.propTypes = {  
//   propArray: PropTypes.array.isRequired,   
//   propNumber: PropTypes.number.isRequired,   
//   propString: PropTypes.string,   
// }  

// App.defaultProps = {  
//   propArray: ["Bangalore", " Chennai", "Kolkata", "India"],  
//   propNumber: 5,  
//   propString: "James Bond.",  
// }  


export default App;
