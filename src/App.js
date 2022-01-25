import { useSelector } from 'react-redux';

function App() {
  const { counter } = useSelector((state) => state);
  return (
    <div className='container'>
      <h1>Hello Redux Basic</h1>
      <div className='counter'>Counter: {counter}</div>
      <div>
        <button className='btn'>Increase + </button>
        <button className='btn'>Decrease - </button>
        <div>
          <button className='btn'>Hide/Show Counter Number</button>
        </div>
      </div>
    </div>
  );
}

export default App;
