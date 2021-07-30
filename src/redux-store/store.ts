import { applyMiddleware, combineReducers, createStore } from "redux";
import { gameReducer } from "redux-store/reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ game: gameReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
