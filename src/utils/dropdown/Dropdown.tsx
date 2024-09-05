import './Dropdown.css';
import whatsApp from '../../assets/whatsapp.png';
import telegram from '../../assets/telegram.png';
import phone from '../../assets/phone.png';

const Dropdown = () => {
    return (
        <div className='wrapper6'>
            <div className='arrow-up '></div>
            <div className='dropdownBox'>

                <a href="https://wa.clck.bar/79615143725" className='ddItem'>
                    <img src={whatsApp} alt='whatsApp' width="35px" height="35px"/>
                    <span>WhatsApp</span>
                </a>
           
                <a href="https://t.me/+79274238608" className='ddItem'>
                    <img src={telegram} alt='telegram' width="35px" height="35px"/>
                    <span>Telegram</span>
                </a>

                <a href="tel:89615143725" className='ddItem'>
                    <img src={phone} alt='phone' width="35px" height="35px"/>
                    <span>+7 (961) 514-37-25</span>    
                </a>

            </div>
        </div>
        

    )
}

export default Dropdown;