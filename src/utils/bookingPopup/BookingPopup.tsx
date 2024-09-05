import { MouseEventHandler, useState } from 'react';
import 'react-phone-number-input/style.css';
import { validate as validateEmail } from 'email-validator';
import PhoneInput, { type Value } from 'react-phone-number-input';
import './BookingPopup.css';
import './AdaptiveBookingPopup.css';
import person from '../../assets/person.png';
import kids from '../../assets/kids.png';
import { IHouse } from '../../components/bookingPanel/BookingPanel';
import Swal from 'sweetalert2';
import { makeHouseReservation } from '../../API/ReservationRequest';
import { AiOutlineClose } from 'react-icons/ai';
import { sendMail } from '../../API/MailRequest';

interface BookingPopupProps {
    modalOpened: boolean, 
    setModalOpened: (arg0: boolean) => void,
    toggleModal: MouseEventHandler,
    house: IHouse, 
    startDate: Date, 
    endDate: Date, 
    quantityAdults: number, 
    quantityKids: number
}


const BookingPopup = ({ toggleModal, modalOpened, house, startDate, endDate, quantityAdults, quantityKids }: BookingPopupProps) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const startDateString = startDate.toLocaleDateString();
    const endDateString = endDate.toLocaleDateString();
    const diffInSecs = endDate.getTime() - startDate.getTime();
    const nights = Math.round(diffInSecs / (1000 * 3600 * 24))>0 ? Math.round(diffInSecs / (1000 * 3600 * 24)) : 1;

    const handlePhoneChange = (value: Value | undefined) => {
        if (value) {
            setPhone(value)
        }
    }

    const makeRegistration = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if(validateEmail(email) === false) {
             Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please enter a valid email address!",
              });
        }
        if(!firstname ||!lastname ||!email ||!phone) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill all fields of form!",
              });
        }
        const data = {
        houseId: house.id,  
        startDate: startDate.toLocaleDateString(),
        endDate: endDate.toLocaleDateString(),
        numberPersons: quantityAdults + quantityKids,
        firstname: firstname,
        lastname: lastname, 
        email: email,
        phone: phone
        };

        const mailData = {
                lastname: lastname,
                firstname: firstname,
                email: email,
            }
        
        try {
          await makeHouseReservation(data);
          await sendMail(mailData);
            toggleModal(e);
            setFirstname('');
            setLastname('');
            setEmail('');
            setPhone('');
            Swal.fire({
                icon: "success",
                title: "Thank you!",
                text: "Your booking has been successfully made!",
              });
            
            
          
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <>
    {modalOpened && (
            <div className="modal">
                 <div className="overlay">
                    <div className="modal-content">
        
                    <div className='wrapper10'>
                        
                        <div className='infoForBooking'>
                            <h2 className='headerBookingModal'>Booking datails</h2>
                            <div className='box1'>
                                <div className='checkBox1'>
                                    <p>Check-in</p>
                                    <span className='date'>{startDateString}</span>
                                </div>
                                <div className='boxDetails'>
                                    <div className='detailsBook'>
                                        <img 
                                        src={person} 
                                        alt='person' 
                                        width="26px" 
                                        height="26px"
                                        />
                                        <span>Adults: {quantityAdults}</span>
                                    </div>
                                    <div className='detailsBook'>
                                    <img 
                                        src={kids} 
                                        alt='person' 
                                        width="26px" 
                                        height="26px"
                                        />
                                        <span>Kids: {quantityKids}</span>
                                    </div>
                               
                                </div>
                                <div className='checkBox2'>
                                    <p>Check-out</p>
                                    <span className='date'>{ endDateString }</span>
                                </div>
                            </div>
                            <hr style={{width:"100%", alignSelf:"center"}}/>
                            <div className='checkBox1'>
                                <span>1 House</span>
                                <div className='nameHouse'>
                                    <p className='nameHouse date'>{house.title}</p>
                                    <span className='monthYear'>${house.price}</span>
                                </div>
                                <div  className='nameHouse'>
                                    <p>nights</p>
                                    <span className='monthYear'>
                                        {nights}
                                    </span>
                                </div>
                                
                            <hr style={{width:"100%", alignSelf:"center"}}/>
                            </div>
                            <div className='priceTotal date'>
                                <p>Total:</p>
                                <span> ${house.price} </span>
                            </div>
                            
                        </div>

                        <form className='personalInfo'>
                            <h2 className='headerBookingModal'>Personal datails</h2>
                            <div className='inputBox'>
                                <input
                                placeholder='firstname'
                                type='text'
                                className='infoInput'
                                value={firstname || ""}
                                onChange={(e) => setFirstname(e.target.value)}
                                />
                                <input
                                placeholder='lastname'
                                type='text'
                                className='infoInput'
                                value={lastname || ""}
                                onChange={(e) => setLastname(e.target.value)}
                                />
                            </div>
                            <div className='inputBox'>
                            <PhoneInput
                                placeholder='phone number'
                                type='phone'
                                className='infoInput'
                                value={phone || ""}
                                defaultCountry="RU" 
                                onChange={handlePhoneChange}   
                                />
                                <input
                                placeholder='e-mail'
                                type='e-mail'
                                className='infoInput'
                                value={email || ""}
                                onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <button 
                            className='btn'
                            onClick={makeRegistration}
                            >
                                Book
                            </button>  
                        </form>
                        <AiOutlineClose className="close-modal" size={40} onClick={toggleModal}/>
                    </div>
                    </div>
                </div>
            </div>
          
          )}
          
        </>
      );
}

export default BookingPopup;