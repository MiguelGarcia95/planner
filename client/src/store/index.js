import {createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'react-thunk';
import rootReducers from './reducers';


const initialState = {};

// const middleware = [thunk];

const store = createStore(
  rootReducers,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store;