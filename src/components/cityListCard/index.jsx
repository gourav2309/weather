import {BsStar} from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { RxCross1 } from 'react-icons/rx';
import { removeCity, updateCity } from '../../slice/cityListSlice';
import { useEffect, useState } from 'react';
const CityListCard = ({cityData, index, onClick, clickedCityIndex}) => {
    const [activeClass, setActiveClass] = useState('');
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(removeCity(index));
    }
    useEffect(()=>{
        if(index === clickedCityIndex){
            setActiveClass('active')
        }else{
            setActiveClass('')
        }
    },[clickedCityIndex])
    return(
        <div className={"padding20 margin10 backGroundMuddy radius " + activeClass} onClick={onClick}>
            <div className='flex space-between icon'>
                <div>
                    {cityData.city.name}
                </div>
                <div>
                    <RxCross1 onClick={handleDelete}/>
                </div>
            </div>
            <div className="padding20 flex ">
                <div className="padding20">
                    {Math.floor(cityData?.list[0]?.main.temp -273.15)} °C
                </div>
                <div className="padding20">
                    {cityData.list[0]?.weather[0]?.description}
                </div>
            </div>
        </div>

    )
}
export default CityListCard;