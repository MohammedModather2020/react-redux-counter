import { createStore } from 'redux';
// ------------------------------------------------------------------------>
// crete global state
const initState = { counter: 0 };
// ------------------------------------------------------------------------>
// create counter reducer
const counterReducer = (state = initState, action) => {
  return state;
};
// ------------------------------------------------------------------------>
// create store
const store = createStore(counterReducer);
// ------------------------------------------------------------------------>
export default store;
