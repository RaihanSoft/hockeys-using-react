import Client from "./components/Client/Client";
import Club from "./components/Club/Club";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Product from "./components/Product/Product";
import Program from "./components/Program/Program";
import Touch from "./components/Touch/Touch";


function App() {
  return (
    <div>
     <Nav></Nav>
     <Header></Header>
     <Club></Club>
     <Program></Program>
     <Product></Product>
     <Client></Client>
     <Touch></Touch>
     <Footer></Footer>

    </div>
  );
}

export default App;
