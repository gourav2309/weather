import { createSlice } from "@reduxjs/toolkit";
import cityList from "../cityList";
import { isEqual } from "lodash";

const initialState = [...cityList];

const cityOptionList = createSlice({
    name: 'cityOptionList',
    initialState,
    reducers:{
        addCityIntoOptionList: (state, action) => {
                state.unshift(action.payload);
        },
        removeCityFromOptionList: (state, action) => {
            state.splice(action.payload,1);
        }
    },
})

export const { addCityIntoOptionList, removeCityFromOptionList } = cityOptionList.actions;
export default cityOptionList.reducer;