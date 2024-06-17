import ConditionalRendaring from "./components/ConditionalRendaring";
import Props from "./components/Props";
import Result from "./components/Result";
import SwitchCase from "./components/SwitchCase";
import Ternary from "./components/Ternary";


const App = () => {

  let city = ['Dhaka','Chitagong','Rangpur','Rajshahi','Mymensing'];
 function handleClick (){ 
  alert ("you clicked me !!");
 }

  return (
    <div>

      <Result/> 
      <ConditionalRendaring/>
      <SwitchCase/>
      <Ternary/>
    <ol>
        {
        city.map((item,i)=>{ 
          return <li key={(i,toString)}>{item}</li>
        }) 
        }
     </ol>
     <button onClick={handleClick}>SUBMIT</button>
    </div>

    
  );
};

export default App;