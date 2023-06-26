import './App.css';

export default function Square() {
  return (
    <>
      <div className='board-row'>
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
        <button className="square">4</button>
      </div>
      <div className='board-row'>
        <button className="square">5</button>
        <button className="square">6</button>
        <button className="square">7</button>
        <button className="square">8</button>
      </div>
      <div className='board-row'>
        <button className="square">9</button>
        <button className="square">10</button>
        <button className="square">11</button>
        <button className="square">12</button>
      </div>
    </>
  )
}

