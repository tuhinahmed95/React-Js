import ConditionalRendaring from "./components/ConditionalRendaring";
import Result from "./components/Result";
import SwitchCase from "./components/SwitchCase";


const App = () => {

  let city = ['Dhaka','Chitagong','Rangpur','Rajshahi','Mymensing'];

  return (
    <div>

      <Result/>
      <ConditionalRendaring/>
      <SwitchCase/>
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