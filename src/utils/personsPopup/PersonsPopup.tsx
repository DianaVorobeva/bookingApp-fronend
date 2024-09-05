import './PersonsPopup.css';

type PropsPopup = {
    quantityAdults: number,
    setQuantityAdalt: (arg0: number) => void,
    quantityInfants: number,
    setQuantityInfants: (arg0: number) => void,
    quantityKids: number,
    setQuantityKids: (arg0: number) => void,
}

const PersonsPopup: React.FunctionComponent<PropsPopup> = (props)  => {

    return (
        <div className='personsPopup'>
        <div className='popupSection'>
            <p className='titlePopup'>Adults</p>
            <div className='popupBox'>
                <span className='age'>From 7 y.o</span>
                <div className='btnBox'>
                <button
                className={props.quantityAdults>0 ? "btnPersons btnActive" : "btnPersons"}
                onClick={(e) => {e.preventDefault(); if(props.quantityAdults>0)props.setQuantityAdalt(props.quantityAdults - 1)}}
                > 
                - 
                </button>
                <span>{props.quantityAdults}</span>
                <button
                className='btnPersons btnActive'
                onClick={(e) => {e.preventDefault(); props.setQuantityAdalt(props.quantityAdults + 1)}}
                >
                + 
                </button>
                </div>
            </div>
        </div>
        <hr style={{width:"90%", alignSelf:"center", color:"#949494"}}/>
        <div className='popupSection'>
            <p className='titlePopup'>Kids</p>
            <div className='popupBox'>
                <span className='age'>Infants</span>
                <div className='btnBox'>
                <button
                className={props.quantityInfants>0 ? "btnPersons btnActive" : "btnPersons"}
                onClick={(e) => {e.preventDefault();  if(props.quantityInfants>0)props.setQuantityInfants(props.quantityInfants - 1)}}
                > 
                - 
                </button>
                <span>{props.quantityInfants}</span>
                <button
                className='btnPersons btnActive'
                onClick={(e) => {e.preventDefault();  props.setQuantityInfants(props.quantityInfants + 1)}}
                >
                + 
                </button>
                </div>
            </div>
            <div className='popupBox'>
                <span className='age'>3-6 y.o</span>
                <div className='btnBox'>
                    <button
                    className={props.quantityKids>0 ? "btnPersons btnActive" : "btnPersons"}
                    onClick={(e) => {e.preventDefault(); if(props.quantityKids>0)props.setQuantityKids(props.quantityKids - 1)}}
                    > 
                    - 
                    </button>
                    <span>{props.quantityKids}</span>
                    <button
                    className='btnPersons btnActive'
                    onClick={(e) => {e.preventDefault(); props.setQuantityKids(props.quantityKids + 1)}}
                    >
                    + 
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PersonsPopup;