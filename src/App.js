import React from 'react';
import '../src/App.css';
import Header from './components/Header';
import TopContainer from './components/topContainer';
import Middlecontainer from "./components/Middlecontainer";
import Showcase from "./components/Showcase";
import Lowercomponent from './components/Lowercomponent';
import Lastcard from './components/Lastcard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-black text-white font-serif" >
      
      <Header />
      <TopContainer />
      <Middlecontainer />
      <Showcase />
      <Lowercomponent />
      <Lastcard />
      <Footer />

    </div>
  );
}

export default App;
