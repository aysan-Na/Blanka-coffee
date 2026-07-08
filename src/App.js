import Header from './components/Header/Header';
import './App.css';
import './media.css'
import routes from './routes'
import { useRoutes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import data from './data';

function App() {
  let router = useRoutes(routes)
  return (
    <>
      <div className="App" >
        <Header />
        {router}
        <Footer />
      </div>
    </>
  );
}
export default App;
