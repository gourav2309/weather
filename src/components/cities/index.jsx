import { useState } from "react";
import CityListCard from "../cityListCard";
import SideBar from "../sideBar";
import {RiAddCircleFill} from 'react-icons/ri'
import InputModel from "../inputModel";
import { useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { BsStar } from "react-icons/bs";
import CityWeatherCard from "../cityWeatherCard";
import DetailedCityView from "../detailedCity";

const Cities = () => {
    const cityList = useSelector(state => state.cityList);
    const [clickedCityIndex, SetClickedCityIndex] = useState(0);
    const [inputModelClass, setInputModelClass] = useState('hide');

    const handleAddClick = () => {
        setInputModelClass('show');
    }
    const handleClickOnCityCard = (index) => {
        SetClickedCityIndex(index);
    }
    const handleInputModelHide = () => {
        setInputModelClass('hide')
    }
    return(
        <div className="grid grid-1-4-7 mainBackGround ">
            <SideBar/>
            <div className={`popover-template ${inputModelClass}`}></div>
            <div className="margin10 flex row section">
                <div className="padding20 flex space-between bold font25 header">
                    <div>
                        City
                    </div>
                    <div onClick={handleAddClick}>
                        <RiAddCircleFill className="icon"/>
                    </div>
                </div>
                <div className="cityList margin10 font17 bold overflow">
                    {
                        cityList.length > 0 ? 
                        (
                            cityList.map((city,index) => (
                                <CityListCard 
                                    key={index} 
                                    cityData={city} 
                                    index={index}
                                    onClick={()=>handleClickOnCityCard(index)}
                                    clickedCityIndex={clickedCityIndex}
                                />
                            ))
                        ):
                        (
                            <div className="padding20 white icon">
                                add City
                            </div>
                        )
                    }
                </div>
            </div>
            <div key={cityList} className="margin10 section">
                {
                    clickedCityIndex >= 0 ? (
                        <DetailedCityView index={clickedCityIndex}/>
                    ) : 
                    null
                }
            </div>
            <div className={`inputModelParent ${inputModelClass}`} onClick={handleInputModelHide}>
                <InputModel onClick={handleInputModelHide}/>
            </div>
        </div>
    )
}
export default Cities;