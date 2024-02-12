import { createSlice } from '@reduxjs/toolkit'

export const LocationSlice = createSlice({
  name: 'locationDetails',
  initialState: {
    currentLocation:null,

  },
  reducers: {
    setCurrentLocation:(state, action)=>{
        state.currentLocation=action.payload;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const {setCurrentLocation  } = LocationSlice.actions

export const selectCurrentLocation=(state)=>state.locationDetails.currentLocation;


export default LocationSlice.reducer