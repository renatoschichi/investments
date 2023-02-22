import './App.scss';
import Navbar from './components/navbar/index';
import Carousel from './components/carousel/index';
import Courses from './components/courses/index';
import Form from './components/form';
import Footer from './components/footer/index';
import Subscriptions from './components/subscriptions/index';
import Crypto from './components/crypto/index';
import StockMarket from './components/stock/index';
import REITS from './components/reits/index';

function App() {
  return (
    <div>
     <Navbar />
     <Carousel />
     <StockMarket />
     <REITS />
     <Crypto />
     <Subscriptions />
     <Courses />
     <Form />
     <Footer />
    </div>
  );
}

export default App;