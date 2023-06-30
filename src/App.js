import React from "react"
import './App.css';
import Header from "./components/header";
import LunchSection from "./components/lunchSection";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <main>
        <Header></Header>
        <section>
          <LunchSection></LunchSection>
        </section>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
