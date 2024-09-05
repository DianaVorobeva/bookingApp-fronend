import './Options.css';
import './AdaptiveOptions.css';
import forest from '../../assets/forest.png';
import sauna from '../../assets/sauna.png';
import fair from '../../assets/fair.png';
import barbecue from '../../assets/barbecue.png';
import pool from '../../assets/pool.png';
import lake from '../../assets/lake.png';

const Options = () => {
    return (
        <div className='optionWrapper'>
            <div className='option'>
                <img src={forest} alt="forest" width="46px" height="46px"/>
                <span>Forest and fresh air</span>
            </div>
            <div className='option'>
                <img src={fair} alt="fair" width="46px" height="46px"/>
                <span>Relaxation by the fire</span>
            </div>
            <div className='option'>
                <img src={pool} alt="pool" width="46px" height="46px"/>
                <span>Outdoor pool</span>
            </div>
            <div className='option'>
                <img src={barbecue} alt="barbecue" width="55px" height="46px"/>
                <span>Barbecue area</span>
            </div>
            <div className='option'>
                <img src={sauna} alt="sauna" width="46px" height="46px"/>
                <span>Relaxing sauna</span>
            </div>
            <div className='option'>
                <img src={lake} alt="lake" width="59px" height="46px"/>
                <span>Azure Lake</span>
            </div>
        </div>
    )
}

export default Options;