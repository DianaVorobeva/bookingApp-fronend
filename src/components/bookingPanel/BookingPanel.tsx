import "./BookingPanel.css";
import "./AdapriveBookingPanel.css";
import person from "../../assets/person.png";
import calendar from "../../assets/calendar.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';
import { useEffect, useState } from "react";
import PersonsPopup from "../../utils/personsPopup/PersonsPopup";
import { filterHouses } from "../../API/FilterRequest";
import Apartments from "../apartments/Apartments";
import { getAllHouses } from "../../API/HousesRequest";

export interface IHouse {
  id: number;
  title: string;
  images: string[];
  price: number;
  bedrooms: number;
  bathrooms: number;
  capacity: number;
}

const BookingPanel = ( ) => {
  const [houseData, setHouseData] = useState<IHouse[] | null>([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [quantityAdults, setQuantityAdalt] = useState<number>(2);
  const [quantityInfants, setQuantityInfants] = useState<number>(0);
  const [quantityKids, setQuantityKids] = useState<number>(0);
  const [showPopup, setShowPopup] = useState(false);

  if(startDate > endDate) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Start date must be before end date",
    });
  }

      // fetch data from db

      useEffect(() => {
        const fetchHousesData = async () => {
          try {
            const { data } = await getAllHouses();
            setHouseData(data);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchHousesData();
      }, []);
    
      

//filter houses

const filterData = async (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
  const RequestOptions = {
    startDate: startDate.toLocaleDateString(),
    endDate: endDate.toLocaleDateString(),
    numberPersons: quantityAdults + quantityKids,
  };

  const { data } = await filterHouses(RequestOptions);
  console.log(data);
  setHouseData(data);
};

  return (
    <div className="wrapper">
      <form action="" method="get" className="date-form">
       
          <h3 className="headerBook">BOOK NOW!</h3>

        <label className="form-row datein-input">
          <DatePicker
            selected={startDate}
            dateFormat="yyyy/MM/dd"
            onChange={(date: Date) => setStartDate(date)}
            placeholderText="Check-in"
            className="datePicker"
            minDate={new Date()}
          />
          <img src={calendar} alt="calendar" width="26px" height="26px" />
        </label>

        <label className="form-row dateout-input">
          <DatePicker
            dateFormat="yyyy/MM/dd"
            selected={endDate}
            onChange={(date: Date) => setEndDate(date)}
            placeholderText="Check-out"
            className="datePicker"
            minDate={new Date()}
          />
          <img src={calendar} alt="calendar" width="26px" height="26px" />
        </label>
        <div>
         
            <div className="person-input" onClick={() => setShowPopup(!showPopup)}>
              <div className="guests">
                <span>Guests</span>
                <span>
                  {quantityAdults} adults,{" "}
                  {quantityKids ? quantityKids : "without"} kids
                </span>
              </div>
              <img
                src={person}
                alt="person"
                width="26px"
                height="26px"
                onClick={() => setShowPopup(!showPopup)}
              />
            </div>
   

          {showPopup && (
            <PersonsPopup
              {...{
                quantityAdults,
                setQuantityAdalt,
                quantityInfants,
                setQuantityInfants,
                quantityKids,
                setQuantityKids,
              }}
            />
          )}
        </div>

        <div className="submit-input">
          <button
            className="searchBtn"
            onClick={(e: React.MouseEvent<HTMLElement>) => filterData(e)}
          >
           Search
          </button>
        </div>
      </form>
      <Apartments
      { ... {
        houseData,
        startDate,
        endDate,
        quantityAdults,
        quantityKids
      }}
      />
    </div>
  );
};

export default BookingPanel;
