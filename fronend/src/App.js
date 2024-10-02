import Footer from "./component/Footer";
import Header from "./component/Header";
import {Container} from 'react-bootstrap';
import Home from "./HomeScreen/Home";
function App() {
  return (
    <>
      <Header/>
      <main className="py-3">
        <Container>
         <Home/>
        </Container>
      </main>
      <Footer/>
    </>
  );
}

export default App;
