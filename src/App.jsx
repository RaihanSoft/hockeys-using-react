import Client from "./components/Client/Client";
import Club from "./components/Club/Club";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Product from "./components/Product/Product";
import Program from "./components/Program/Program";


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
    </div>
  );
}

export default App;
