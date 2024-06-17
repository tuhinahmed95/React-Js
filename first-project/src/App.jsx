import ConditionalRendaring from "./components/ConditionalRendaring";
import Result from "./components/Result";


const App = () => {

  let city = ['Dhaka','Chitagong','Rangpur','Rajshahi','Mymensing'];

  return (
    <div>

      <Result/>
      <ConditionalRendaring/>
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