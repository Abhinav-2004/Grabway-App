import { configureStore } from '@reduxjs/toolkit';
import RouteReducer from './slices/RouteSlice';
import LocationReducer from "./slices/LocationSlice";
export default configureStore({
  reducer: {
    routeDetails: RouteReducer,
    locationDetails: LocationReducer,
  },
})