import React from "react"
import './App.css';
import Header from "./components/header";
import FoodSection from "./components/foodSection";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <main>
        <Header></Header>
        <section>
          <FoodSection></FoodSection>
        </section>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
