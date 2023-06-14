import { useNavigate } from "react-router-dom";

const SideBar = ({from}) => {
    const navigate = useNavigate();
    let homeClass = 'navLinks';
    let cityClass = 'navLinks';
    if(from==='home'){
        homeClass = 'active';
    }else{
        cityClass = 'active';
    }
    const handleLinkClick = (loction) => {
        if(loction === 'home'){
            navigate('/');
        }else{
            navigate('/cities');
        }
    }
    return(
        <div className="SideBar height100">
            <div className={homeClass} onClick={()=>handleLinkClick('home')}>
                <h2>Home</h2>
            </div>
            <div className={cityClass} onClick={()=>handleLinkClick('cities')}>
                <h2>Cities</h2>
            </div>
        </div>
    )
}
export default SideBar;