import SideBar from "../sideBar";
import { MdAddBox } from 'react-icons/md';
import CityWeatherCard from "../cityWeatherCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
    const navigate = useNavigate();

    const favoriteCity = useSelector(state => state.cityList.filter(city => city.isFavorite === true));

    const handleAddCityClick = () => {
        navigate('/cities');
    }
    return (
        <div className="grid grid-1-11 mainBackGround">
            <SideBar from='home' />
            <div>
                <nav className="homeHeader">
                    <div className='homeTitle'>Favorite Cities</div>
                    <div className='addCity'
                        onClick={handleAddCityClick}
                    >
                        <span>Add new city</span>
                        <span
                            className='addIcon'
                        >
                            <MdAddBox />
                        </span>
                    </div>
                </nav>
                <div className="homeSection">
                    {
                       favoriteCity.map((city, index) => (
                           <CityWeatherCard key={index} cityData={city} index={index} />
                       )) 
                    }
                </div>
            </div>
        </div>
    )
}
export default Home;