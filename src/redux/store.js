// import { applyMiddleware, createStore } from "redux";
// import createSagaMiddleWare from "redux-saga";
// import logger from "redux-logger";

// import rootReducer from "./rootReducer";

// import rootSagas from "./saga";

// const sagaMiddleware = createSagaMiddleWare();

// const middleware = [sagaMiddleware];
// if (process.env.Mode_ENV === "development") {
//   middleware.push(logger);
// }

// const store = createStore(rootReducer, applyMiddleware(...middleware));

// sagaMiddleware.run(rootSagas);
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleWare from "redux-saga";
import rootReducer from "./rootReducer";
import rootSagas from "./rootSaga";
const saga = createSagaMiddleWare();
const store = configureStore({
  reducer: {
    users: rootReducer,
  },
  middleware: [saga],
});
saga.run(rootSagas);

export default store;
