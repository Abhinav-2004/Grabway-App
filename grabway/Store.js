import { configureStore } from '@reduxjs/toolkit';
import RouteReducer from './slices/RouteSlice';
export default configureStore({
  reducer: {
    routeDetails: RouteReducer,
  },
})