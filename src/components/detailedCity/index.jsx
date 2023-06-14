import { AiFillStar } from "react-icons/ai";
import { BsStar } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { updateCity } from "../../slice/cityListSlice";
import SunriseSunsetComponent from "../suriseSunsetBox";
import DigitalClock from "../clock";

const DetailedCityView = ({ index }) => {
    const cityList = useSelector(state => state.cityList);
    const cityData = cityList[index];
    let {main, weather, wind, visibility} = {};
    if (cityData && cityData.list && cityData.list.length > 0) {
        const data = cityData.list[0];
        main = data.main;
        weather = data.weather;
        wind = data.wind;
        visibility = data.visibility;
      }
    const dispatch = useDispatch();
    const handleFavoriteClick = (isFavorite) => {
        const payload = {
            index,
            isFavorite,
        }
        dispatch(updateCity(payload));
    }
    const forecastItems = cityData?.list;

        // Group forecast items by date
        const groupedForecast = forecastItems?.reduce((grouped, item) => {
            const date = new Date(item.dt_txt).toLocaleDateString('en-US', {
              weekday: 'long',
              day: 'numeric',
              month: 'short',
            });
            if (!grouped[date]) {
              grouped[date] = item;
            }
            return grouped;
          }, {});

        // Convert object to an array
        let forecastList = [];
        if(groupedForecast){
            forecastList = Object.values(groupedForecast);
        }
        const currentDate = new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            day: 'numeric',
            month: 'short',
          });
          const filteredForecast = forecastList?.filter(
            (item) => new Date(item.dt_txt).toLocaleDateString('en-US', {
              weekday: 'long',
              day: 'numeric',
              month: 'short',
            }) !== currentDate
          );
    return (
        <div>
            {
                cityData ? (
                    <>
                        <div className="flex icon padding20 margin20 space-between header">
                            <div>
                                {cityData.city.name}
                            </div>
                            <div>
                                {
                                    cityData.isFavorite ?
                                        (
                                            <AiFillStar className='favIcon' onClick={() => handleFavoriteClick(false)} />
                                        ) : (
                                            <BsStar onClick={() => handleFavoriteClick(true)} />
                                        )
                                }
                            </div>
                        </div>
                        <div>
                            <div className="flex space-between">
                                <div className='cardTemp white padding40 margin20'>
                                    <div className='temp font50'>
                                        {Math.round(main?.temp -273.15)} °C
                                    </div>
                                    <div>
                                        <div className="font17 bold margin10">
                                            min : {Math.round(main?.temp_min -273.15)} °C
                                        </div>
                                        <div className="font17 bold margin10">
                                            max : {Math.round(main?.temp_max -273.15)} °C
                                        </div>
                                    </div>
                                </div>
                                <DigitalClock />
                            </div>
                            <div className="flex space-between">
                                <div className="white margin10 icon bold">
                                    <div>
                                        {
                                            weather ? weather[0]?.description : ''
                                        }
                                    </div>
                                    <div>
                                        visibility: {visibility}
                                    </div>
                                    <div>
                                        Wind:{wind?.speed}
                                    </div>
                                    <div>
                                        Humidity: {main?.humidity}
                                    </div>
                                </div>
                                <SunriseSunsetComponent sunrise={cityData.city.sunrise} sunset={cityData.city.sunset}/>
                            </div>
                            <div>
                                <div className="flex flex-wrap space-between mt-30">
                                    {filteredForecast?.map((item, index) => (
                                        <div className="forecast-item margin10 font17 white bold" key={index}>
                                        <p>{Math.floor(item?.main?.temp -273.15)} °C</p>
                                        <p>{item?.weather[0]?.description}</p>
                                        <p>{new Date(item?.dt_txt).toLocaleDateString('en-US', {
                                                weekday: 'long',
                                                day: 'numeric',
                                                month: 'short',
                                            })}
                                        </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div style={{ "text-align": "center" }} className="white icon padding20">
                        <h2>No City Selected</h2>
                    </div>
                )
            }
        </div>
    )
}
export default DetailedCityView;