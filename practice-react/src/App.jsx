import ConditionalRendaring from "./components/ConditionalRendaring";
import Props from "./components/Props";
import Result from "./components/Result";
import SwitchCase from "./components/SwitchCase";
import Ternary from "./components/Ternary";


const App = () => {

  let city = ['Dhaka','Chitagong','Rangpur','Rajshahi','Mymensing'];

  return (
    <div>

      <Result/> 
      <ConditionalRendaring/>
      <SwitchCase/>
      <Ternary/>
      <Props title="this is a props title"/>
    <ol>
        {
        city.map((item,i)=>{ 
          return <li key={(i,toString)}>{item}</li>
        }) 
        }
     </ol>
    </div>
  );
};

export default App;