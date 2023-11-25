import { useState } from 'react';
import Navigation from '../Components/Navigation';
import '../Styles/app.css';
import Dashboard from '../Components/Dashboard';
import Income from '../Components/Income';
import Expense from '../Components/Expense';
import Report from '../Components/Report';
import { useGlobalContext } from '../Context/globalContext';
import Discussion from '../Components/Discussion';

function Home() {

  const [ active, setActive] = useState(1)
  const global = useGlobalContext()

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2: 
        return <Discussion />
      case 3:
        return <Income />
      case 4:
        return <Expense />
      case 5:
          return <Report />
      default: 
        return <Dashboard />
    }
   
  }

  return (
    <div className="app">
      <div className='main-layout'>
       <Navigation active={active} setActive = {setActive} />
       <main>
          {displayData()}
          
        </main>
      </div>
    </div>
  );
}

export default Home;
