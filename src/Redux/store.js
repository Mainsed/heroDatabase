import {applyMiddleware, combineReducers, createStore} from "redux";
import superHeroesReducer from "./superHeroesReducer";
import ReduxThunk  from "redux-thunk";
import {reducer} from 'redux-form';
import superHeroPageReducer from "./superHeroPageReducer";

let reducers = combineReducers({
    superHeroes: superHeroesReducer,
    superHeroPage: superHeroPageReducer,
    form: reducer,
})

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;