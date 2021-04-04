import { combineReducers, createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { FilmReducer } from "../redux/reducers/FilmReducer";

const rootReducer = combineReducers({
  FilmReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
