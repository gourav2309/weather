import { configureStore } from "@reduxjs/toolkit";
import cityOptionListReducer from '../slice/cityOptionListSlice';
import cityListReducer from '../slice/cityListSlice';

const store = configureStore({
    reducer:{
        cityOptionList : cityOptionListReducer,
        cityList: cityListReducer,
    }
})

export default store;