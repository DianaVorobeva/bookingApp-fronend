import './House.css';
import './AdaptiveHouse.css';
import SliderHouses from '../slider/SliderHouses';
import { type IHouse } from '../../components/bookingPanel/BookingPanel';
import heater from '../../assets/heater.png';
import wiFi from '../../assets/wi-fi.png';
import bathroom from '../../assets/bathroom.png';
import livingRoom from '../../assets/livingRoom.png';
import kicthen from '../../assets/kitchen.png';
import shoes from '../../assets/shoes.png';
import swing from '../../assets/swing.png';
import bed from '../../assets/bed.png';
import persons from '../../assets/persons.png';
import fire from '../../assets/fire.png';
import BookingPopup from '../bookingPopup/BookingPopup';
import { useState } from 'react';

type PropsHouse = {
    house: IHouse,
    startDate: Date,
    endDate: Date,
    quantityAdults: number,
    quantityKids: number
}

const House = ({ house, startDate, endDate, quantityAdults, quantityKids }: PropsHouse) => {
    const [modalOpened, setModalOpened] = useState(false);

    const toggleModal = () => {
        setModalOpened(!modalOpened);
    };
    if(modalOpened) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    
    return (
        <div className="wrapper2">
        <div
        key={house.id}
        className="houseContainer"
        >

            <div className='box'>
                <SliderHouses props={house.images}/>
                <div className="background"></div>
            </div>

            <div className='details'>
                <h3 className='titleHouse'>{house.title}</h3>
                <div className="options">
                <div className='singleOption'>
                        <img src={bed} alt='option' width="35px" height="35px"/><span> x {house.bedrooms}</span>
                        <span>Bedrooms</span>
                    </div>
                    <div className='singleOption'>
                        <img src={heater} alt='option' width="35px" height="35px"/>
                        <span>Heater</span>
                    </div>
                    <div className='singleOption'>
                        <img src={shoes} alt='option' width="35px" height="35px"/>
                        <span>Shoes</span>
                    </div>
                    <div className='singleOption'>
                        <img src={bathroom} alt='option' width="35px" height="35px"/><span> x {house.bathrooms} </span>
                        <span>Bathroom</span>
                    </div>
                    <div className='singleOption'>
                        <img src={kicthen} alt='option' width="35px" height="35px"/>
                        <span>Kicthen</span>
                    </div>
                    <div className='singleOption'>
                        <img src={swing} alt='option' width="35px" height="35px"/>
                        <span>Swing</span>
                    </div>
                    <div className='singleOption'>
                        <img src={wiFi} alt='option' width="35px" height="35px"/>
                        <span>Free Wi-Fi</span>
                    </div>
                    <div className='singleOption'>
                        <img src={livingRoom} alt='option' width="35px" height="35px"/>
                        <span>Living room</span>
                    </div>
                </div>
                <div className='ctaBlock'>
                    <span className="capacity">
                        <img src={persons} alt='people' width="35px" height="35px"/>
                        <span className='capacitySize'> x <span className='number'>{house.capacity}</span> </span>
                    </span>
                    <div className='cta'>
                        <span className="price">
                            <img src={fire} alt='fire' width="30px" height="30px"/>
                            <span className='block'>
                                <span>${house.price}</span>
                                <span className='night'>/night</span>
                            </span>
                            
                        </span>
                        <button 
                        className="btn"
                        onClick={toggleModal}
                        >
                        Book now
                        </button>
                        
                        <BookingPopup { ... { modalOpened, setModalOpened, toggleModal, house, startDate, endDate, quantityAdults, quantityKids }}/>
                    </div>
                </div>
            </div>
            
        </div>
        <hr style={{width:"80%", alignSelf:"center"}}/>
        </div>
)
}

export default House;