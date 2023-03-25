import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';
import data from './data';

function App() {

  const card = data.map((item)=>{
        return <Card 
                   key = {item.id}
                   item = {item}
                />
  })

  return (
    <>
       <Navbar />
       <div className='card--list'>
              {card}
       </div>
    </>
  );
}

export default App;
