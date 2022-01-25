import { createStore } from 'redux';
// ------------------------------------------------------------------------>
// crete global state
const initState = { counter: 0, isShowCounter: true };
// ------------------------------------------------------------------------>
// create counter reducer
const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return { ...state, counter: state.counter + action.payload };
    case 'DECREASE':
      return { ...state, counter: state.counter - action.payload };
    case 'TOGGLE_COUNTER':
      return { ...state, isShowCounter: !state.isShowCounter };
    default:
      return state;
  }
};
// ------------------------------------------------------------------------>
// create store
const store = createStore(counterReducer);
// ------------------------------------------------------------------------>
export default store;
