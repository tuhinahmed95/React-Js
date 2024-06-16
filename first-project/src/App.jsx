import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  let marks=90;
  return (
    <div>
      <Header/>
      <Hero/>
      <ContactForm/>
      <Footer/>
      <h1>{new Date().getFullYear()}</h1>
      { 
        marks>95?
        <h1>Brialiant Result</h1>:
        <h1>Average Result</h1>
      }
    </div>
  );
};

export default App;