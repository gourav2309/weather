import { AiFillStar } from 'react-icons/ai';
import { BsCloudLightningRain } from 'react-icons/bs';
import { updateCity } from '../../slice/cityListSlice';
import { useDispatch } from 'react-redux';
import DateDisplay from '../dateDisplay';

const CityWeatherCard = ({cityData, index}) => {
    // const {main, weather, wind, visibility} = props.currentWeatherData;
    const {main, weather, wind, visibility, dt} = cityData.list[0];
    const dispatch = useDispatch();
    const handleFavoriteClick = (isFavorite) => {
        const payload = {
            index,
            isFavorite,
        }
        dispatch(updateCity(payload));
    }
    return(
            <div className='cityWeatherCard'>
                <div className='cardHeader'>
                    <div>{cityData.city.name}</div>
                    <div onClick={() => handleFavoriteClick(false)}><AiFillStar className='favIcon'/></div>
                </div>
                <div className='cardSection'>
                    <div className="temp cloudIcon">
                        <BsCloudLightningRain/>
                    </div>
                    <div className='cardSection1'>
                        <div className='cardTemp'>
                            <div className='temp'>
                                {Math.round(main.temp -273.15)} °C
                            </div>
                            <div>
                                <div>
                                    min : {Math.round(main.temp_min -273.15)} °C
                                </div>
                                <div>
                                    max : {Math.round(main.temp_max -273.15)} °C
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cardSection2'>
                        <div>wind: {wind.speed}</div>
                        <div>humidity: {main.humidity}%</div>
                        <div>visibility: {visibility}</div>
                    </div>
                </div>
                <div className='cardFooter'>{weather[0].description} <DateDisplay dateString={dt} /></div>
            </div>
    )
}
export default CityWeatherCard;