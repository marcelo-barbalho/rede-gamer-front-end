import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import multi from "redux-multi";
import authReducer from './auth/auth.reducer'
import userReducer from './user/user.reducer'

// modularizações dos reduces
const reducers = combineReducers({
  auth:authReducer,
  user:userReducer
  // post: PostReducer,
});

// middlewares de confifurações do projeto
const middleware = [thunk, multi];

// compose que junta os middlewares e ferramentas de debug
const compose = composeWithDevTools(applyMiddleware(...middleware));

// criação da store
const store = createStore(reducers, compose);

export default store;


