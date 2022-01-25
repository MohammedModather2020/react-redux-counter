import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const { counter, isShowCounter } = useSelector((state) => state);
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
  // ------------------------------------------------------------------------>
  // create unction toggle counter
  const toggleCounter = () => {
    dispatch({ type: 'TOGGLE_COUNTER' });
  };
  return (
    <div className='container'>
      <h1>Hello Redux Basic</h1>
      <div>
        {isShowCounter && (
          <>
            <div className='counter'>Counter: {counter}</div>
            <button className='btn' onClick={increase}>
              Increase + {isShowCounter}
            </button>
            <button className='btn' onClick={decrease}>
              Decrease -
            </button>
          </>
        )}
        <div>
          <button className='btn' onClick={toggleCounter}>
            Hide/Show Counter Number
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
