import { useRef, useState } from "react";
import ConditionalRendaring from "./components/ConditionalRendaring";
import Props from "./components/Props";
import Result from "./components/Result";
import SwitchCase from "./components/SwitchCase";
import Ternary from "./components/Ternary";
import Card from "./components/Card";


const App = () => {

  let city = ['Dhaka','Chitagong','Rangpur','Rajshahi','Mymensing'];
 function handleClick (){ 
  alert ("you clicked me !!");
 }

// form submit here
 let PostFormData = (e)=>{ 
  e.preventDefault();
  alert ("form submited !")
 }

//  useRef use here
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

let FirstName,LastName = useRef();

const MultipleInputConnect = () =>{ 
  let Fname = FirstName.value;
  let Lname = LastName.value;
  alert (Fname + " "+ Lname);
}

// css class remove and add here
let myClass = useRef();
const ChangeCss = () =>{ 
  myClass.current.classlist.remove("text-success")
  myClass.current.classlist.add("text-danger")
}

// useState use here

  return (
    <div>
      <Result/> 
      <ConditionalRendaring/>
      <SwitchCase/>
      <Ternary/> 
      <Card title="this is a title" desText="this is desc"/>
      <Card title="this is a title" desText="this is desc"/>
      <Card title="this is a title" desText="this is desc"/>
      <Props firstTitle="this is childBtn" btn="hello world"/>
      
   
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
    <button onClick={imgBtn}>imgBtn</button><br /><br />
        {/* multiple useref use here */}
    <input ref={(a)=>FirstName=a} placeholder="enter your first name" type="text" />
    <input ref={(b)=>LastName=b} placeholder="enter your last name" type="text" />
    <button onClick={MultipleInputConnect}>Submit</button>

    {/* css class add and remove here */}
    <h1 className="text-success"  ref={myClass}>this is bootstrap</h1>
    <button onClick={ChangeCss}>Click Here</button><br /><br />


    </div>

    
  );
};

export default App;