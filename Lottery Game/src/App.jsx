import './App.css'
import Lottery from './Lottery';
import { sum } from './helper';

function App() {

  function winCondition(ticket) {
    return ticket.every((ele) => ele === ticket[0] ) ;
  }

  return (
    <>
      <Lottery n={3} winningFunction={winCondition}></Lottery>
    </>
  );
}

export default App
