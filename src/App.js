import './App.css';
import CreateQR from './CreateQR/CreateQR';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
      <main>
        <Header />
        <section>
          <CreateQR />
        </section>      
      </main>
      <Footer />
    </>
  );
}

export default App;
