const configureStore = require("@reduxjs/toolkit").configureStore;
const reduxLogger = require("redux-logger");
//Import all the slices from features
const cakeReducer = require("../features/cake/cakeSlice");
const iceCreamReducer = require("../features/iceCream/iceCreamSlice");
const userReducer = require("../features/user/userSlice");

//Log prev and next state and the action dispatched
const logger = reduxLogger.createLogger();

const store = configureStore({
  //Combine the slices on configureStore form rtk
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
  },
  //Add middlewares by returning an array of them
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

//Default export the store
module.exports = store;
