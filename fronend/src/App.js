import {Container} from 'react-bootstrap';
import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./HomeScreen/Home";
function App() {
  return (
    <>
      <Header/>
      <main className="py-3">
        <Container>
          <Outlet/>
        </Container>
      </main>
      <Footer/>
    </>
  );
}

export default App;
