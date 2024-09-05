
import './Apartments.css';
import './AdapriveApartments.css';
import House from "../../utils/house/House";
import { IHouse } from '../bookingPanel/BookingPanel';


type Props = {
  houseData: IHouse[] | null,
  startDate: Date,
  endDate: Date,
  quantityAdults: number,
  quantityKids: number
}


const Apartments= ({ houseData, startDate, endDate, quantityAdults, quantityKids }: Props) => {
  
    return (
        <div className="wrapper7">
            <h1 id="booking">/Our houses</h1>

            {
                houseData && houseData.map((house) => { 
                    return (
                        <div className="wrapper2" key={house.id}>
                            <House
                                { ... {
                                  house,
                                  startDate,
                                  endDate,
                                  quantityAdults,
                                  quantityKids
                                }}/>
                        </div>
                        
                    )})
               
            }
            {
                houseData?.length === 0  && <h2 className='noMatches'>No vacant houses</h2>  
            }
        </div>
    )
}

export default Apartments;