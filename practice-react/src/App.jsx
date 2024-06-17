import ConditionalRendaring from "./components/ConditionalRendaring";
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