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


 let PostFormData = (e)=>{ 
  e.preventDefault();
  alert ("form submited !")
 }

  return (
    <div>

      <Result/> 
      <ConditionalRendaring/>
      <SwitchCase/>
      <Ternary/>
   
     <button onClick={handleClick}>SUBMIT</button> <br />

     <form onSubmit={PostFormData}> 
      <input type="text" placeholder="enter your name" />
      <button>submit</button>
     </form>


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