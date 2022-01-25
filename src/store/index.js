import { createStore } from 'redux';
// ------------------------------------------------------------------------>
// crete global state
const initState = { counter: 0 };
// ------------------------------------------------------------------------>
// create counter reducer
const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return { ...state, counter: state.counter + action.payload };
    case 'DECREASE':
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};
// ------------------------------------------------------------------------>
// create store
const store = createStore(counterReducer);
// ------------------------------------------------------------------------>
export default store;
