import { createSlice } from '@reduxjs/toolkit'

export const RouteSlice = createSlice({
  name: 'routeDetails',
  initialState: {
    origin:null,
    destination:null,
    travelInformation:null,
    fare:null,

  },
  reducers: {
    setOrigin:(state, action)=>{
        state.origin=action.payload;
    },
    setDestination:(state, action)=>{
        state.destination=action.payload;
    },
    setTravelTimeInformation:(state, action)=>{
        state.travelInformation=action.payload;
    },
    setFareDetails:(state,action)=>{
        state.fare=action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const {setOrigin,setDestination,setTravelTimeInformation,setFareDetails  } = RouteSlice.actions

export const selectOrigin=(state)=>state.routeDetails.origin;

export const selectDestination=(state)=>state.routeDetails.destination;

export const selecttravelTimeInformation=(state)=>state.routeDetails.travelTimeInformation;


export default RouteSlice.reducer