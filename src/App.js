import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state);
  // ------------------------------------------------------------------------>
  // create function increase counter
  const increase = () => {
    const action = { type: 'INCREASE', payload: 1 };
    dispatch(action);
  };
  // ------------------------------------------------------------------------>
  // create function decrease counter
  const decrease = () => {
    const action = { type: 'DECREASE', payload: 1 };
    dispatch(action);
  };
  return (
    <div className='container'>
      <h1>Hello Redux Basic</h1>
      <div className='counter'>Counter: {counter}</div>
      <div>
        <button className='btn' onClick={increase}>
          Increase +
        </button>
        <button className='btn' onClick={decrease}>
          Decrease -
        </button>
        <div>
          <button className='btn'>Hide/Show Counter Number</button>
        </div>
      </div>
    </div>
  );
}

export default App;
