import { createSlice } from "@reduxjs/toolkit";
import { isEqual } from "lodash";

const initialState = [];

const favoriteCity = createSlice({
    name: 'favoriteCity',
    initialState,
    reducers: {
        addCityIntoFavorite: (state, action) => {
            const duplicate = state.filter(data => isEqual(data, action.payload));
            if(duplicate.length === 0){
                state.unshift(action.payload);
            }
        },
        removeCityFromFavorite: (state, action) => {
            state.splice(action.payload,1);
        }
    }
})

export default favoriteCity.reducer;

export const {addCityIntoFavorite, removeCityFromFavorite} = favoriteCity.actions;
