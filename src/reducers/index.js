import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import actorsReducer from '../components/actors/entities';

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  actors: actorsReducer
});
