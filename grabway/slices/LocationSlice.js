import { createSlice } from '@reduxjs/toolkit'

export const LocationSlice = createSlice({
  name: 'loactionDetails',
  initialState: {
    currentLocation:null,

  },
  reducers: {
    setCurrentLocation:(state, action)=>{
        state.origin=action.payload;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const {setCurrentLocation  } = LocationSlice.actions

export default LocationSlice.reducer