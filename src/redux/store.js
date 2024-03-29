import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const logger = createLogger();

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware, logger)
    );
}
