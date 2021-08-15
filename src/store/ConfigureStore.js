import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";


const ConfigureStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    return {
        ...createStore(rootReducer,applyMiddleware(sagaMiddleware)),
        runSaga:sagaMiddleware.run(rootSaga)
    }
}

export default ConfigureStore;