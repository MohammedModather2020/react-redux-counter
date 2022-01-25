import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const { counter, isShowCounter } = useSelector((state) => state);
  // ------------------------------------------------------------------------>
  // create function increase and decrease counter
  const counterOperation = (action, payload) => {
    dispatch({ type: action, payload });
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
            <button
              className='btn'
              onClick={() => counterOperation('INCREASE', 1)}
            >
              Increase + {isShowCounter}
            </button>
            <button
              className='btn'
              onClick={() => counterOperation('DECREASE', 1)}
            >
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
