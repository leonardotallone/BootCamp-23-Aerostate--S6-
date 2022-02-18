// STORE CREATION
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { airportReducer } from "./airports";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    airports: airportReducer, // "airportname":{reducer:}
  },
});
export default store;




