
import NavBar from '../navbar/NavBar';
import './Banner.css';
import './AdaptiveBanner.css';

const Banner = () => {
    return (
        <div className="bannerWrapper">
            <NavBar/>

            <div className='bannerText'>
                <h2 className='header'>FOREST</h2>
                <h4 className='textBanner'>An ideal place to get away from the city rush...</h4>
            </div>
        </div>
    )
}

export default Banner;