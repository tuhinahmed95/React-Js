import { useRef } from "react";
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

let myHeadLine = useRef();
let Change = () =>{ 
  myHeadLine.current.innerText="Hello";
}

let myImg = useRef();
const imgBtn = () =>{ 
  myImg.current.src="https://placehold.jp/3d4070/ffffff/150x150.png"
  myImg.current.setAttribute("width", "500px");
  myImg.current.setAttribute("height", "300px");
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

     <h1 ref={myHeadLine}></h1>
     <button onClick={Change}>Click</button><br /> <br />

    <img ref={myImg} src="https://placehold.jp/150x150.png" /><br />
    <button onClick={imgBtn}>imgBtn</button>
    </div>

    
  );
};

export default App;