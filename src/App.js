import './App.css';
import Book from './components/Book';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Book title="The Power of Now" image="https://upload.wikimedia.org/wikipedia/en/6/66/TPON_Cover_LG.jpg" description="Lorem ipsum dolor sit amet, qui id nullam definitiones, est in nonumes indoctum explicari. Te qui latine invidunt laboramus. At nam ceteros appetere. Intellegat intellegebat eu qui, vis omnesque sensibus facilisis eu. Quod aeterno intellegam ius ad, his eu facete detraxit."/>
      <Book title="The Alchemist" image="https://images-na.ssl-images-amazon.com/images/I/51kcX5PpaZL._SX329_BO1,204,203,200_.jpg" description="Lorem ipsum dolor sit amet, ne persius minimum sea. Mel ei malorum habemus, no mei accumsan convenire posidonium, eum ad modus imperdiet. Primis doming eleifend per no, commodo molestie argumentum vim ex. No iusto adolescens qui, laoreet admodum ad vis. Pri ea erant epicuri intellegebat."/>
      <Footer />
      
    </div>
  );
}

export default App;
