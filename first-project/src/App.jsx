import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <ContactForm/>
      <Footer/>
      <h1>{new Date().getFullYear()}</h1>
      
    </div>
  );
};

export default App;