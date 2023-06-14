import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {RiAddBoxLine} from 'react-icons/ri'
import axios from "axios";
import { isEmpty } from "lodash";
import { addCity } from "../../slice/cityListSlice";
import { removeCityFromOptionList } from "../../slice/cityOptionListSlice";
import { RxCross1 } from "react-icons/rx";

const InputModel = ({onClick}) => {
    const dispatch = useDispatch();
    const initialOptions = useSelector(state => state.cityOptionList);
    
    const [optionList, setOptionList] = useState([...initialOptions]);
    const [optionKey, setOptionKey] = useState(0);
    const [latResp, setLatResp] = useState({});

    useEffect(()=>{
        if(!isEmpty(latResp)){
            const {lat, lon} = latResp;
            fetchCityWeather(lat,lon)
        }
    },[latResp])

    useEffect(()=>{
        setOptionList([...initialOptions]);
        setOptionKey(optionKey+1);
    },[initialOptions])

    const handleOnChange = (e) => {
        const filteredOptionList = initialOptions.filter(option => option.toLowerCase().includes(e.target.value.toLowerCase()));
        setOptionList(filteredOptionList);
    }
    const fetchLatLon = async (url) => {
        try {
            const response = await axios.get(url);
            return response.data[0];
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    const fetchCityWeather = async(lat, lon) => {
        const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=8af6a15b1e0da61013228daccb8bd99b`
        try {
            const response = await axios.get(url);
            response.data.isFavorite = false;
            dispatch(addCity(response.data));
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    const handleAddCityClick = (cityName, index) => {
        dispatch(removeCityFromOptionList(index));
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=8af6a15b1e0da61013228daccb8bd99b`
        fetchLatLon(url).then(res=> setLatResp(res));
    }
    return(
        <div className="inputModelBox" onClick={(e) => {e.stopPropagation()}}>
                <RxCross1 
                    className="icon white"
                    style={{
                        "position": "relative",
                        "top": "-194px",
                        "left": "470px",
                    }}
                    onClick={onClick}
                />
            <div>
                    <input
                        type="search"
                        className="ModelBoxinput"
                        placeholder="search city"
                        onChange={(e)=>handleOnChange(e)} 
                    />
                <div className="optionBox" key={optionKey}>
                    {
                        optionList.map(
                            (option, index) => 
                            <div key={index} className="flex space-between">
                                <div>
                                    {option}
                                </div>
                                <div onClick={() => handleAddCityClick(option, index)}>
                                    <RiAddBoxLine className="hover icon"/>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default InputModel;