import './SliderGallery.css';
import './AdaptiveSliderGallery.css';
import { useState } from "react";
import data from "./data";
import SliderCommon from '../../utils/slider/SliderCommon';
import leaf from '../../assets/leaf.svg';
import flower from '../../assets/flower.svg';

export interface Image {
  id: number;
  image: string;
}

const SliderGallery = () => {
  const [people, _setPeople] = useState<Image[]>(data);
  

  return (
    <section className="section2">
        <h1>
          <span>/</span>Gallery
        </h1>
        <div className='wrapper3'>
          <img
          src={leaf} 
          alt='leaf' 
          width="320px"
          className='leaf'
          />
          <SliderCommon props={people}/>
          <img
          src={flower}
          alt='flower' 
          width="220px"
          className='flower'
          />
        </div>
      
    </section>
  );
}

export default SliderGallery;