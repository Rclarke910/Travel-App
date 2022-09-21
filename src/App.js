import Cards from './cards'
import Navbar from './navbar'
import data from './data'
import './App.css';

function App() {
  const cardList = data.map(item => {
    return (
      <Cards
      key={item.id}
      item={item}
      /> 
    )
  })
  return (
    <div className="App">
     <Navbar />
     <section className="cards-list">
                {cardList}
            </section>
    </div>
  );
}

export default App;
