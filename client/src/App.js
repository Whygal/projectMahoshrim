import './App.css';
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer';
import Pages from './Views/Pages';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
            <Header />
            <Pages />
            <Footer />
     </div>
  );
}

export default App;